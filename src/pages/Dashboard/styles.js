import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  background: var(--background);

  width: 100%;
  height: 100%;
`;

export const Header = styled.header`
  display: flex;
  alignt-items: center;
  justify-content: center;

  background-image: 
    linear-gradient(
    to bottom,
    rgba(0,0,0,0),
    rgba(0,0,0,0.1)
  );
  opacity: 0.9; 
  width: 100%;
  height: 6rem;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);


`;

export const WrapperHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TitleHeader = styled.h1`
      color: var(--blue);
      margin: 2rem;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50rem;
  height: 20rem;
  margin-top: 7rem;
  }
`;

export const WrapperButton = styled.div`
  display: flex;

  .enabled {
      display: flex;
      align-items: center;
      justify-content: space-around;
  
      background-color: var(--blue-light);
      color: var(--background);
  
      border-color: var(--blue-light);
      border-radius: 0.4rem;
  
      padding: 0.3rem;
      margin: 1rem;
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);

      :hover {
        border-color: transparent;
        background-color: var(--semi-blue);
        transition: 200ms;
      }
  }

  .disabled {
      display: flex;
      align-items: center;
      justify-content: space-around;
  
      background-color: var(--blue);
      color: var(--background);
  
      border-color: var(--blue);
      border-radius: 0.4rem;
  
      padding: 0.3rem;
      margin: 1rem;
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);

  }
`;

export const FormContainer = styled.form`
  diplay: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100%;
  margin: 2rem;

  strong {
    padding-top: 1rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-around;

    background-color: var(--blue);
    color: var(--background);

    border-color: var(--blue);
    border-radius: 0.4rem;

    padding: 0.3rem;
    margin-top: 1rem;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);

    :hover {
      border-color: transparent;
      background-color: var(--semi-blue);
      transition: 200ms;
    }

    .send {
      margin-left: 1rem;
    }
  }
`;

export const ButtonSwitch = styled.button`

`;

export const FormContainerSendAll = styled.form`
  diplay: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100%;
  margin: 3rem;

  strong {
    padding-top: 1rem;
  }

    .send {
      margin-left: 1rem;
    }
  }
`;



export const FormHeader = styled.div`
  display: flex;
  align-itens: center;
  justify-content: center;
  flex-direction: column;
`;

export const InputPhone = styled.input`
  padding: 0.4rem;
  border: solid 0.1rem;
  border-color: var(--blue);
  border-radius: 0.7rem;

  :focus {
    box-shadow: 0,0,0,0;
    outline: 0;
  }
`;



export const ButtonSendAll = styled.button`
      display: flex;
      align-items: center;
      justify-content: space-around;
  
      background-color: var(--blue);
      color: var(--background);
  
      border-color: var(--blue);
      border-radius: 0.4rem;
      cursor: pointer;
  
      padding: 0.3rem;
      margin-top: 1rem;
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);

      
    :hover {
      border-color: transparent;
      background-color: var(--semi-blue);
      transition: 200ms;
    }
`;

export const QrCodeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin-left: 5rem;

    img {
      margin: 1rem;
    }

    .qrCode-message {
      font-size: 1.2rem;
      margin-top: 2rem;

      text-align: center;
    }
`;
export const TextArea = styled.textarea`
  display: flex;
  align-items: center;
  justify-content: center;
  resize: none;

  width: 20rem;
  height: 8rem;

  padding: 1rem;
  margin-top: 1rem;
  border: solid 1px;
  border-radius: .5rem;
  border-color: var(--blue);

  :focus {
    box-shadow: 0,0,0,0;
    outline: 0;
  }
`;