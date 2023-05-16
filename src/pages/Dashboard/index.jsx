import React, { useState, useEffect } from 'react';
import { WhatsappLogo, PaperPlaneRight } from 'phosphor-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api } from '../../services/api.js';
import { Loading } from '../../Components/Loading/index.js';
import { Footer } from '../../Components/Footer/index'

import {
  Container,
  Header,
  Wrapper,
  TextArea,
  FormContainer,
  QrCodeContainer,
  ButtonSendAll,
  FormContainerSendAll,
  FormHeader,
  WrapperHeader,
  TitleHeader,
  InputPhone,
  WrapperButton
} from './styles';

export function Dashboard() {
  const [qrCode, setQrCode] = useState('');
  const [connected, setConnected] = useState('notLogged');
  const [serverStatus, setServerStatus] = useState({});
  const [message, setMessage] = useState('');
  const [allMessages, setAllMessages] = useState('');
  const [phones, setPhones] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [year, setYear] = useState();
  const [months, setMonths] = useState();
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [loading, setLoading] = useState(false);

  function handleShowDate() {
    setInterval(() => {
      const date = new Date();
      let month = date.toLocaleString('default', { month: 'long' })
      let minutesFormatted = date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })

      setHours(minutesFormatted);
      setDays(date.getDate());
      setMonths(month);
      setYear(date.getFullYear())
    }, 10000)
  }

  function showFormMessage() {
    setShowForm((showForm) => !showForm)
  }

  async function fetchQrCode() {
    try {
      const response = await api.get('/login-status')

      setQrCode(response.data.qrcode.base64Qr)
      setConnected(response.data.connected)
    } catch (err) {
      setServerStatus({ ...err })
      console.log(serverStatus)
    }
  }

  async function createSession() {
    const response = await api.get('/create-session');
    setQrCode(response.data.qrcode.base64Qr);
    setConnected(response.data.connected);
  }

  async function handleSendMessage(event) {
    event.preventDefault()

    try {
      let data = {
        phones: phones.split(","),
        message: message
      }

      const response = await api.post('/send-message', data);
      console.log(data)
      toast.success('Mensagens Enviadas!')

      if (response.data.error) {
        return toast.error('Opa, ocorreu um problema.')
      }
    } catch (error) {
      console.log(error)
    }
  }

  async function handleSendMessageForAll(event) {
    event.preventDefault()

    try {
      let data = {
        message: allMessages
      }

      await api.post('/send-message-firebird', data);
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleShowDate()
    fetchQrCode()
    if (connected === 'Sem login de usuario') {
      setInterval(() => {
        fetchQrCode()
        console.log(connected)
      }, 5000)
    }
  }, [connected, fetchQrCode])

  return (
    <>
      <Container>
        <Header>
          <WrapperHeader>
            <WhatsappLogo size={48} color={"#00008B"} />
            <TitleHeader>Transmissão de mensagens</TitleHeader>
          </WrapperHeader>
        </Header>
        <WrapperButton>
          <button disabled={showForm ? true : false} className={!showForm ? "enabled" : "disabled"} onClick={showFormMessage}>Enviar para todos</button>
          <button disabled={!showForm ? true : false} className={showForm ? "enabled" : "disabled"} onClick={showFormMessage}>Digitar para enviar</button>
        </WrapperButton>
        <Wrapper>
          {
            !showForm ? (
              <FormContainer onSubmit={handleSendMessage}>
                <FormHeader>
                  <InputPhone
                    placeholder='Ex: 5527999999999'
                    type="text"
                    value={phones}
                    onChange={event => setPhones(event.target.value)}
                  />
                  <strong>Digite o texto que deseja enviar</strong>
                </FormHeader>
                <TextArea
                  placeholder="Digite sua mensagem aqui"
                  type="text"
                  value={message}
                  onChange={event => setMessage(event.target.value)}
                />
                <button type="submit">
                  Enviar mensagens
                  <PaperPlaneRight className="send" size={18} />
                </button>
              </FormContainer>
            ) : (
              <FormContainerSendAll onSubmit={handleSendMessageForAll}>
                <FormHeader>
                  <strong>Enviar para todos</strong>
                  <span>Digite aqui se deseja enviar para todos</span>
                </FormHeader>
                <TextArea
                  placeholder="Digite sua mensagem aqui"
                  type="text"
                  value={allMessages}
                  onChange={event => setAllMessages(event.target.value)}
                />
                <ButtonSendAll type="submit">
                  Enviar para todos
                  <PaperPlaneRight className="send" size={18} />
                </ButtonSendAll>
              </FormContainerSendAll>
            )
          }
          <QrCodeContainer>
            {
              connected === 'Sem login de usuario' ? (
                <div>
                  <strong style={{ fontSize: '1rem', color: '#FF0000' }}>Nao conectado, Escaneie o QRCode Abaixo</strong>
                  <img src={qrCode} alt="Imagem" />
                </div>
              ) : serverStatus.message === 'Network Error' ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <strong style={{ textAlign: 'center', fontSize: '1.5rem', color: '#FF0000' }}>Houve um erro de Conexão!</strong>
                  <strong style={{ textAlign: 'center' }}>Não conseguimos carregar o seu QRCode por algum problema no sevidor ☹️</strong>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <strong style={{ fontSize: '1.5rem', color: '#008000' }}>Conectado!</strong>
                  <strong>Pode enviar suas mensagens!</strong>
                </div>
              )
            }
          </QrCodeContainer>
        </Wrapper>
        <ToastContainer />
      </Container>
      <Footer>
        <text>Hoje é dia {days} de {months} de {year}</text>
        <text>Horas: {hours}</text>
      </Footer>
    </>
  );
}