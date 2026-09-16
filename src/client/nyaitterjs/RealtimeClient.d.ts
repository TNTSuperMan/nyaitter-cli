/**
 * RealtimeClient - WebSocket でサーバーからのリアルタイムイベントを受け取ります。
 *
 * @example
 * const realtime = client.realtime();
 *
 * realtime.on('notification', (notification) => {
 *   console.log('新着通知:', notification);
 * });
 *
 * realtime.on('dm', ({ dmId, message }) => {
 *   console.log(`DM (${dmId}):`, message.content);
 * });
 *
 * realtime.on('timelinePost', ({ postId }) => {
 *   console.log('フォロー中タイムラインに新着:', postId);
 * });
 *
 * await realtime.connect();
 * // 切断するときは realtime.disconnect()
 */
export declare class RealtimeClient {
    _client: import("./NyaitterClient").NyaitterClient;
    _ws: any;
    _listeners: Map<any, any>;
    _pingInterval: number | null;
    _reconnectTimer: number | null;
    _shouldReconnect: boolean;
    _reconnectDelayMs: number | undefined;
    /**
     * @param {import('./NyaitterClient').NyaitterClient} client
     */
    constructor(client: import('./NyaitterClient').NyaitterClient);
    /**
     * イベントリスナーを登録します。
     *
     * イベント一覧：
     * - `'notification'`  — 新着通知 `(notification: object) => void`
     * - `'notificationUnreadCount'` — 通知未読数の更新 `(count: number) => void`
     * - `'dm'`            — DM 新着メッセージ `({ dmId, message, sender }) => void`
     * - `'dmUnreadCount'` — DM 未読数の更新 `(count: number) => void`
     * - `'timelinePost'`  — フォロー中タイムラインの新着 `({ postId, authorId }) => void`
     * - `'open'`          — 接続完了 `() => void`
     * - `'close'`         — 切断 `() => void`
     * - `'error'`         — エラー `(error: Event) => void`
     *
     * @param {string} event - イベント名
     * @param {Function} handler - コールバック関数
     * @returns {this} メソッドチェーン可
     *
     * @example
     * realtime.on('notification', (n) => console.log(n));
     */
    on(event: string, handler: Function): this;
    /**
     * イベントリスナーを解除します。
     *
     * @param {string} event - イベント名
     * @param {Function} handler - 登録時と同じコールバック関数
     * @returns {this}
     */
    off(event: string, handler: Function): this;
    /** @internal */
    _emit(event: any, data: any): void;
    /**
     * WebSocket に接続します。
     * 接続が確立すると `'open'` イベントが発火します。
     *
     * @param {object} [options]
     * @param {boolean} [options.autoReconnect=true] - 切断時に自動再接続するか
     * @param {number}  [options.reconnectDelayMs=3000] - 再接続までの待機時間
     * @returns {Promise<void>} 接続完了で resolve
     */
    connect({ autoReconnect, reconnectDelayMs }?: {
        autoReconnect?: boolean;
        reconnectDelayMs?: number;
    }): Promise<void>;
    /** @internal */
    _connect(): Promise<any>;
    /** @internal */
    _handleMessage(raw: any): void;
    /** @internal */
    _startPing(): void;
    /** @internal */
    _stopPing(): void;
    /**
     * WebSocket を切断します。
     * 自動再接続も停止します。
     */
    disconnect(): void;
    /**
     * 現在接続中かどうかを返します。
     * @returns {boolean}
     */
    get connected(): boolean;
}
