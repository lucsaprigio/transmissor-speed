import axios from 'axios';

import { ip } from '../config'

const api = axios.create({
  baseURL: `http://${ip}:3131`
});

export { api };