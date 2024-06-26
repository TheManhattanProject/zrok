/* tslint:disable */
/* eslint-disable */
/**
 * zrok
 * zrok client access
 *
 * The version of the OpenAPI document: 0.3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  InviteRequest,
  LoginRequest,
  RegisterRequest,
  RegisterResponse,
  ResetPasswordRequest,
  ResetPasswordRequestRequest,
  VerifyRequest,
  VerifyResponse,
} from '../models/index';
import {
    InviteRequestFromJSON,
    InviteRequestToJSON,
    LoginRequestFromJSON,
    LoginRequestToJSON,
    RegisterRequestFromJSON,
    RegisterRequestToJSON,
    RegisterResponseFromJSON,
    RegisterResponseToJSON,
    ResetPasswordRequestFromJSON,
    ResetPasswordRequestToJSON,
    ResetPasswordRequestRequestFromJSON,
    ResetPasswordRequestRequestToJSON,
    VerifyRequestFromJSON,
    VerifyRequestToJSON,
    VerifyResponseFromJSON,
    VerifyResponseToJSON,
} from '../models/index';

export interface InviteOperationRequest {
    body?: InviteRequest;
}

export interface LoginOperationRequest {
    body?: LoginRequest;
}

export interface RegisterOperationRequest {
    body?: RegisterRequest;
}

export interface ResetPasswordOperationRequest {
    body?: ResetPasswordRequest;
}

export interface ResetPasswordRequestOperationRequest {
    body?: ResetPasswordRequestRequest;
}

export interface VerifyOperationRequest {
    body?: VerifyRequest;
}

/**
 * 
 */
export class AccountApi extends runtime.BaseAPI {

    /**
     */
    async inviteRaw(requestParameters: InviteOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/zrok.v1+json';

        const response = await this.request({
            path: `/invite`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InviteRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async invite(requestParameters: InviteOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.inviteRaw(requestParameters, initOverrides);
    }

    /**
     */
    async loginRaw(requestParameters: LoginOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/zrok.v1+json';

        const response = await this.request({
            path: `/login`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: LoginRequestToJSON(requestParameters.body),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     */
    async login(requestParameters: LoginOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.loginRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async registerRaw(requestParameters: RegisterOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RegisterResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/zrok.v1+json';

        const response = await this.request({
            path: `/register`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RegisterRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RegisterResponseFromJSON(jsonValue));
    }

    /**
     */
    async register(requestParameters: RegisterOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RegisterResponse> {
        const response = await this.registerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async resetPasswordRaw(requestParameters: ResetPasswordOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/zrok.v1+json';

        const response = await this.request({
            path: `/resetPassword`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ResetPasswordRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async resetPassword(requestParameters: ResetPasswordOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.resetPasswordRaw(requestParameters, initOverrides);
    }

    /**
     */
    async resetPasswordRequestRaw(requestParameters: ResetPasswordRequestOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/zrok.v1+json';

        const response = await this.request({
            path: `/resetPasswordRequest`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ResetPasswordRequestRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async resetPasswordRequest(requestParameters: ResetPasswordRequestOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.resetPasswordRequestRaw(requestParameters, initOverrides);
    }

    /**
     */
    async verifyRaw(requestParameters: VerifyOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VerifyResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/zrok.v1+json';

        const response = await this.request({
            path: `/verify`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: VerifyRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VerifyResponseFromJSON(jsonValue));
    }

    /**
     */
    async verify(requestParameters: VerifyOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VerifyResponse> {
        const response = await this.verifyRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
