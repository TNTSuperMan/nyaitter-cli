/**
 * ダイレクトメッセージAPI
 * DM グループの作成・取得・編集・脱退・メッセージ送受信・リアクション・未読管理などを行います。
 */
export declare class DmAPI {
    _client: any;
    /** @param {import('../NyaitterClient').NyaitterClient} client */
    constructor(client: import('../NyaitterClient').NyaitterClient);
    /**
     * DM の一覧を取得します。
     *
     * @param {object} [params]
     * @param {number} [params.limit=20] - 取得件数
     * @param {number} [params.offset=0] - 取得開始位置
     * @returns {Promise<{ dm: object[], members: object[], unread_total: number }>}
     *
     * @example
     * const { dm, unread_total } = await client.dm.list();
     */
    list({ limit, offset }?: {
        limit?: number;
        offset?: number;
    }): Promise<{
        dm: object[];
        members: object[];
        unread_total: number;
    }>;
    /**
     * `list()` のエイリアスです。
     */
    getRooms(params: any): Promise<{
        dm: object[];
        members: object[];
        unread_total: number;
    }>;
    /**
     * 全体の DM 未読件数を取得します。
     *
     * @returns {Promise<{ unread_count: number }>}
     */
    getUnreadCount(): Promise<{
        unread_count: number;
    }>;
    /**
     * DM グループごとの未読件数マップを取得します。
     *
     * @returns {Promise<{ unread_total: number, unread_by_dm: Record<string, number> }>}
     */
    getUnreadCounts(): Promise<{
        unread_total: number;
        unread_by_dm: Record<string, number>;
    }>;
    /**
     * 指定ユーザーとの既存の 1対1 DM グループを検索します。
     *
     * @param {number|{ userId: number }} params - 相手のユーザー ID
     * @returns {Promise<{ dm: object|null }>}
     */
    find(params: number | {
        userId: number;
    }): Promise<{
        dm: object | null;
    }>;
    /**
     * DM グループの詳細を取得します。
     *
     * @param {string} dmId - DM グループ ID
     * @param {object} [params]
     * @param {number} [params.limit=50] - 取得するメッセージ数
     * @param {number} [params.offset=0] - 取得開始位置
     * @returns {Promise<{ dm: object[], members: object[], unread_total: number }>}
     */
    get(dmId: string, { limit, offset }?: {
        limit?: number;
        offset?: number;
    }): Promise<{
        dm: object[];
        members: object[];
        unread_total: number;
    }>;
    /**
     * `get()` のエイリアスです。
     */
    getRoom(dmId: any, params: any): Promise<{
        dm: object[];
        members: object[];
        unread_total: number;
    }>;
    /**
     * 新しい DM グループを作成します。
     *
     * @param {object} params
     * @param {number[]} params.members - 招待するユーザー ID の配列
     * @param {string} [params.title] - グループ名
     * @param {string} [params.name] - グループ名
     * @returns {Promise<{ dm: object, created: boolean }>}
     */
    create({ members, title, name }?: {
        members: number[];
        title?: string;
        name?: string;
    }): Promise<{
        dm: object;
        created: boolean;
    }>;
    /**
     * DM グループのタイトルや設定を更新します。
     *
     * @param {string} dmId - DM グループ ID
     * @param {object} params
     * @param {string} [params.title] - グループ名
     * @returns {Promise<{ dm: object }>}
     */
    updateRoom(dmId: string, { title }?: {
        title?: string;
    }): Promise<{
        dm: object;
    }>;
    /**
     * DM グループから脱退します。
     *
     * @param {string} dmId - DM グループ ID
     * @returns {Promise<{ success: boolean }>}
     */
    leave(dmId: string): Promise<{
        success: boolean;
    }>;
    /**
     * DM グループにメッセージを送信します。
     *
     * @param {string} dmId - DM グループ ID
     * @param {object} params
     * @param {string} [params.content] - メッセージ本文
     * @param {Array<object>} [params.attachments] - 添付ファイル
     * @param {object} [params.e2e] - E2E 暗号化ペイロード
     * @returns {Promise<{ dm: object, message: object }>}
     */
    sendMessage(dmId: string, { content, attachments, e2e }?: {
        content?: string;
        attachments?: Array<object>;
        e2e?: object;
    }): Promise<{
        dm: object;
        message: object;
    }>;
    /**
     * 送信済みメッセージを編集します。
     *
     * @param {string} dmId - DM グループ ID
     * @param {string|number} messageId - メッセージ ID
     * @param {object} params
     * @param {string} params.content - 編集後のメッセージ本文
     * @returns {Promise<{ success: boolean, message: object }>}
     */
    editMessage(dmId: string, messageId: string | number, { content }?: {
        content: string;
    }): Promise<{
        success: boolean;
        message: object;
    }>;
    /**
     * 送信済みメッセージを削除します。
     *
     * @param {string} dmId - DM グループ ID
     * @param {string|number} messageId - 削除するメッセージ ID
     * @returns {Promise<{ success: boolean }>}
     */
    deleteMessage(dmId: string, messageId: string | number): Promise<{
        success: boolean;
    }>;
    /**
     * DM グループのメッセージを既読にします。
     *
     * @param {string} dmId - DM グループ ID
     * @param {object} [params]
     * @param {string|number} [params.messageId] - 既読にする最後のメッセージ ID
     * @returns {Promise<{ success: boolean }>}
     */
    markAsRead(dmId: string, { messageId }?: {
        messageId?: string | number;
    }): Promise<{
        success: boolean;
    }>;
    /**
     * DM グループに新しいメンバーを追加します。
     *
     * @param {string} dmId - DM グループ ID
     * @param {number|{ userId: number }} params - 追加するユーザー ID
     * @returns {Promise<{ dm: object, member: object }>}
     */
    addMember(dmId: string, params: number | {
        userId: number;
    }): Promise<{
        dm: object;
        member: object;
    }>;
    /**
     * DM グループからメンバーを退出させます。
     *
     * @param {string} dmId - DM グループ ID
     * @param {number} userId - 削除するユーザー ID
     * @returns {Promise<{ success: boolean }>}
     */
    removeMember(dmId: string, userId: number): Promise<{
        success: boolean;
    }>;
    /**
     * メッセージに絵文字リアクションを付けます。
     *
     * @param {string} dmId - DM グループ ID
     * @param {string|number} messageId - メッセージ ID
     * @param {string} reaction - 絵文字またはリアクション文字列
     * @returns {Promise<{ success: boolean, reactions: object }>}
     */
    addReaction(dmId: string, messageId: string | number, reaction: string): Promise<{
        success: boolean;
        reactions: object;
    }>;
    /**
     * メッセージの絵文字リアクションを取り消します。
     *
     * @param {string} dmId - DM グループ ID
     * @param {string|number} messageId - メッセージ ID
     * @param {string} reaction - 絵文字またはリアクション文字列
     * @returns {Promise<{ success: boolean, reactions: object }>}
     */
    removeReaction(dmId: string, messageId: string | number, reaction: string): Promise<{
        success: boolean;
        reactions: object;
    }>;
}
