import common from "../utils/common";
import * as config from '../constants/conf'

export const getSessionKey = params => {
  return common.requestInPromise({
    url: config.GLOBAL_CONFIG.requestUrl.getSessionKey,
    type: 'GET',
    data: params
  });
}

export const getAccessToken = params => {
  return common.requestInPromise({
    url: config.GLOBAL_CONFIG.requestUrl.getAccessToken,
    type: 'GET',
    data: params
  });
}

export const templateSend = (accessToken, params) => {
  return common.requestInPromise({
    url: config.GLOBAL_CONFIG.requestUrl.templateSend + `?access_token=${accessToken}`,
    type: 'POST',
    data: params
  });
}

