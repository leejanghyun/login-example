import { CommonRequestConfig } from '@/api/index';
/**
 * Login Type 정의
 */
export const enum LoginType {
  Kakao = 'kakao',
  Google = 'google',
  Naver = 'naver',
  Default = '',
}

const enum Method {
  Post = 'post',
}

const login = '/login';

export const loginConfig: CommonRequestConfig = {
  method: Method.Post,
  url: login,
  validateStatus: function (status) {
    return 200 <= status && status < 300;
  },
};
