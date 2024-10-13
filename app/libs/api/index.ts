import createClient from 'openapi-fetch';
import { paths } from './openapi';

const BASE_URL = 'https://api.kotohiro.com';

/**
 * APIクライアント
 */
export const api = createClient<paths>({ baseUrl: BASE_URL });
