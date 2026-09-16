/**
 * NyaitterClient - Nyaitter API を JavaScript から簡単に使うための統合クライアント
 *
 * Bot トークンまたは NyaitterAuth アクセストークンを指定して初期化します。
 *
 * @example
 * const client = new NyaitterClient({
 *   baseUrl: 'https://nyaitter.example.com',
 *   token: 'bot_xxxxxxxxxxxxxxxx',
 * });
 *
 * // 投稿する
 * await client.posts.create({ content: 'こんにちは！' });
 */
import { RealtimeClient } from './RealtimeClient';
export declare class NyaitterClient {
    _baseUrl: string;
    _token: string;
    _fetch: typeof fetch;
    _WebSocket: any;
    auth: import("./api/AuthAPI").AuthAPI;
    posts: import("./api/PostsAPI").PostsAPI;
    polls: import("./api/PollsAPI").PollsAPI;
    users: import("./api/UsersAPI").UsersAPI;
    dm: import("./api/DmAPI").DmAPI;
    notifications: import("./api/NotificationsAPI").NotificationsAPI;
    groups: import("./api/GroupsAPI").GroupsAPI;
    uploads: import("./api/UploadsAPI").UploadsAPI;
    ranking: import("./api/RankingAPI").RankingAPI;
    reports: import("./api/ReportsAPI").ReportsAPI;
    appeals: import("./api/AppealsAPI").AppealsAPI;
    verification: import("./api/VerificationAPI").VerificationAPI;
    imposters: import("./api/ImpostersAPI").ImpostersAPI;
    push: import("./api/PushAPI").PushAPI;
    rules: import("./api/RulesAPI").RulesAPI;
    urlCards: import("./api/UrlCardsAPI").UrlCardsAPI;
    oembed: import("./api/OEmbedAPI").OEmbedAPI;
    ui: import("./api/UIAPI").UIAPI;
    system: import("./api/SystemAPI").SystemAPI;
    nyaitterAuth: import("./api/NyaitterAuthAPI").NyaitterAuthAPI;
    /**
     * @param {object} options
     * @param {string} options.baseUrl - Nyaitter サーバーの URL
     * @param {string} [options.token] - Bot トークンまたはアクセストークン
     * @param {typeof fetch} [options.fetch] - カスタム fetch 関数
     * @param {any} [options.WebSocket] - カスタム WebSocket クラス
     */
    constructor({ baseUrl, token, fetch: customFetch, WebSocket: customWebSocket }?: {
        baseUrl: string;
        token?: string;
        fetch?: typeof fetch;
        WebSocket?: any;
    });
    /**
     * アクセストークンを設定します。
     * @param {string|null} token
     */
    setToken(token: string | null): void;
    /**
     * 現在のアクセストークンを取得します。
     * @returns {string|null}
     */
    getToken(): string | null;
    /**
     * 認証中のユーザーの情報を取得します。
     * `client.users.getMe()` のエイリアスです。
     *
     * @returns {Promise<{ user: object, isBot: boolean, tokenType: string }>}
     */
    getMe(): Promise<{
        user: object;
        isBot: boolean;
        tokenType: string;
    }>;
    /**
     * ユーザーオブジェクトまたはユーザー ID から、適切なアカウントアイコン URL を返します。
     *
     * @param {object|number|string} user - ユーザーオブジェクトまたはユーザー ID
     * @returns {string} アイコンの URL
     */
    getUserIconUrl(user: object | number | string): string;
    /**
     * グループオブジェクトまたはアイコン文字列から、適切なグループアイコン URL を返します。
     *
     * @param {object|string} group - グループオブジェクトまたはアイコン文字列
     * @returns {string} グループアイコンの URL
     */
    getGroupIconUrl(group: object | string): string;
    /**
     * リアルタイムイベントを受信するためのクライアントを作成します。
     *
     * @param {object} [options]
     * @param {boolean} [options.autoReconnect=true] - 切断時の自動再接続
     * @param {number} [options.reconnectDelayMs=3000] - 再接続待機時間
     * @returns {RealtimeClient}
     */
    realtime(options?: {
        autoReconnect?: boolean;
        reconnectDelayMs?: number;
    }): RealtimeClient;
    /**
     * API リクエストを送信する内部メソッド。
     *
     * @param {string} method - HTTP メソッド
     * @param {string} path - エンドポイントのパス
     * @param {object} [options]
     * @param {any} [options.body] - 送信する JSON ボディ
     * @param {object} [options.query] - URL クエリパラメータ
     * @param {Record<string, string>} [options.headers] - 追加ヘッダー
     * @returns {Promise<any>}
     */
    request(method: string, path: string, { body, query, headers }?: {
        body?: any;
        query?: object;
        headers?: Record<string, string>;
    }): Promise<any>;
    /**
     * API リクエストをレスポンス情報付きで送信します。
     * @param {string} methodOrPath HTTP メソッド、または直接指定するエンドポイント
     * @param {string|object} [pathOrOptions] エンドポイント、または GET 用オプション
     * @param {object} [requestOptions]
     * @example
     * await client.requestResponse('/api/custom-endpoint');
     * @returns {Promise<Response>}
     */
    requestResponse(methodOrPath: string, pathOrOptions?: string | object, requestOptions?: object): Promise<Response>;
    _parseResponse(response: any): Promise<any>;
    /** @internal */
    _get(path: any, query: any): Promise<any>;
    /** @internal */
    _post(path: any, body: any, query: any): Promise<any>;
    /** @internal */
    _put(path: any, body: any, query: any): Promise<any>;
    /** @internal */
    _patch(path: any, body: any, query: any): Promise<any>;
    /** @internal */
    _delete(path: any, body: any, query: any): Promise<any>;
}
/**
 * Nyaitter API のエラーを表す例外クラスです。
 */
export declare class NyaitterError extends Error {
    status: number;
    data: any;
    /**
     * @param {string} message - エラーメッセージ
     * @param {number} status - HTTP ステータスコード
     * @param {any} data - サーバーからのレスポンスデータ
     */
    constructor(message: string, status: number, data: any);
}
