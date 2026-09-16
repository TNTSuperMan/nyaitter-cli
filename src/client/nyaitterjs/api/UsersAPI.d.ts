/**
 * ユーザーオブジェクトまたはユーザー ID から、適切なアカウントアイコン URL を生成して返します。
 *
 * @param {object|number|string} user - ユーザーオブジェクトまたはユーザー ID
 * @param {object} [options]
 * @param {string} [options.baseUrl] - サーバーのベース URL
 * @returns {string} アイコンの URL
 */
export declare function getUserIconUrl(user: object | number | string, { baseUrl }?: {
    baseUrl?: string;
}): string;
export declare class UsersAPI {
    _client: any;
    /** @param {import('../NyaitterClient').NyaitterClient} client */
    constructor(client: import('../NyaitterClient').NyaitterClient);
    /**
     * ユーザーオブジェクトまたはユーザー ID から、適切なアカウントアイコン URL を返します。
     *
     * @param {object|number|string} user - ユーザーオブジェクトまたはユーザー ID
     * @returns {string} アイコンの URL
     */
    getIconUrl(user: object | number | string): string;
    /**
     * ユーザー ID でプロフィールを取得します。
     *
     * @param {number} userId - ユーザー ID
     * @returns {Promise<{ user: object }>}
     */
    get(userId: number): Promise<{
        user: object;
    }>;
    /**
     * ログイン中のユーザー情報を取得します。
     *
     * @returns {Promise<{ user: object, isBot: boolean, tokenType: string }>}
     */
    getMe(): Promise<{
        user: object;
        isBot: boolean;
        tokenType: string;
    }>;
    /**
     * ユーザー名でユーザーを検索・取得します。
     *
     * @param {string} handle - ユーザー名
     * @returns {Promise<{ user: object|null }>}
     */
    getByHandle(handle: string): Promise<{
        user: object | null;
    }>;
    /**
     * ユーザーを検索します。
     *
     * @param {object} params
     * @param {string} params.query - 検索キーワード
     * @param {number} [params.limit=20] - 取得件数
     * @param {number} [params.offset=0] - 取得開始位置
     * @param {string|null} [params.cursor=null] - ページネーションカーソル
     * @returns {Promise<{ users: object[], has_more?: boolean, next_cursor?: string|null }>}
     */
    search({ query, limit, offset, cursor }?: {
        query: string;
        limit?: number;
        offset?: number;
        cursor?: string | null;
    }): Promise<{
        users: object[];
        has_more?: boolean;
        next_cursor?: string | null;
    }>;
    /**
     * おすすめユーザー一覧を取得します。
     *
     * @param {object} [params]
     * @param {number} [params.limit=20] - 取得件数
     * @param {number} [params.offset=0] - 取得開始位置
     * @returns {Promise<{ users: object[] }>}
     */
    getRecommended({ limit, offset }?: {
        limit?: number;
        offset?: number;
    }): Promise<{
        users: object[];
    }>;
    /**
     * 複数のユーザー ID からユーザー情報を一括取得します。
     *
     * @param {number[]|string} userIds - ユーザー ID の配列またはカンマ区切り文字列
     * @returns {Promise<{ users: object[] }>}
     */
    getBatch(userIds: number[] | string): Promise<{
        users: object[];
    }>;
    /**
     * `getBatch()` のエイリアスです。
     */
    getUsers(userIds: any): Promise<{
        users: object[];
    }>;
    /**
     * ユーザーのカウント情報を取得します。
     *
     * @param {number} userId - ユーザー ID
     * @returns {Promise<{ post_count: number, media_count: number, follower_count: number, following_count: number }>}
     */
    getCounts(userId: number): Promise<{
        post_count: number;
        media_count: number;
        follower_count: number;
        following_count: number;
    }>;
    /**
     * ユーザーが投稿したメディア一覧を取得します。
     *
     * @param {number} userId - ユーザー ID
     * @param {object} [params]
     * @param {number} [params.limit=15] - 取得件数
     * @param {number} [params.offset=0] - 取得開始位置
     * @param {string} [params.type] - メディア種類 ('image' | 'video')
     * @param {string} [params.cursor] - キーセットカーソル
     * @returns {Promise<{ media_items: object[], next_cursor?: string|null }>}
     */
    getMedia(userId: number, { limit, offset, type, cursor }?: {
        limit?: number;
        offset?: number;
        type?: string;
        cursor?: string;
    }): Promise<{
        media_items: object[];
        next_cursor?: string | null;
    }>;
    /**
     * ユーザーが非公開アカウントかどうかを取得します。
     *
     * @param {number} userId - ユーザー ID
     * @returns {Promise<{ lock: boolean }>}
     */
    isLocked(userId: number): Promise<{
        lock: boolean;
    }>;
    /**
     * ユーザーの投稿一覧を取得します。
     *
     * @param {number} userId - ユーザー ID
     * @param {object} [params]
     * @param {'all'|'posts'|'replies'} [params.mode='all'] - 投稿の絞り込み
     * @param {number} [params.limit=20] - 取得件数
     * @param {number} [params.offset=0] - 取得開始位置
     * @returns {Promise<{ posts: object[], has_more: boolean }>}
     */
    getPosts(userId: number, { limit, offset, mode }?: {
        mode?: 'all' | 'posts' | 'replies';
        limit?: number;
        offset?: number;
    }): Promise<{
        posts: object[];
        has_more: boolean;
    }>;
    /**
     * ユーザーのリプライ一覧を取得します。
     *
     * @param {number} userId - ユーザー ID
     * @param {object} [params]
     * @param {number} [params.limit=20] - 取得件数
     * @param {number} [params.offset=0] - 取得開始位置
     * @returns {Promise<{ replies: object[], has_more: boolean }>}
     */
    getReplies(userId: number, { limit, offset }?: {
        limit?: number;
        offset?: number;
    }): Promise<{
        replies: object[];
        has_more: boolean;
    }>;
    /**
     * ユーザーがいいねした投稿一覧を取得します。
     *
     * @param {number} userId - ユーザー ID
     * @param {object} [params]
     * @param {number} [params.limit=30] - 取得件数
     * @param {number} [params.offset=0] - 取得開始位置
     * @returns {Promise<{ posts: object[], has_more: boolean }>}
     */
    getLikes(userId: number, { limit, offset }?: {
        limit?: number;
        offset?: number;
    }): Promise<{
        posts: object[];
        has_more: boolean;
    }>;
    /**
     * ユーザーがスターした投稿一覧を取得します。
     *
     * @param {number} userId - ユーザー ID
     * @param {object} [params]
     * @param {number} [params.limit=30] - 取得件数
     * @param {number} [params.offset=0] - 取得開始位置
     * @returns {Promise<{ posts: object[], has_more: boolean }>}
     */
    getStars(userId: number, { limit, offset }?: {
        limit?: number;
        offset?: number;
    }): Promise<{
        posts: object[];
        has_more: boolean;
    }>;
    /**
     * ユーザーのフォロワー一覧を取得します。
     *
     * @param {number} userId - ユーザー ID
     * @param {object} [params]
     * @param {number} [params.limit=20] - 取得件数
     * @param {number} [params.offset=0] - 取得開始位置
     * @param {string|null} [params.cursor=null] - ページネーションカーソル
     * @returns {Promise<{ followers: object[], has_more: boolean, next_cursor?: string|null }>}
     */
    getFollowers(userId: number, { limit, offset, cursor }?: {
        limit?: number;
        offset?: number;
        cursor?: string | null;
    }): Promise<{
        followers: object[];
        has_more: boolean;
        next_cursor?: string | null;
    }>;
    /**
     * ユーザーのフォロー中一覧を取得します。
     *
     * @param {number} userId - ユーザー ID
     * @param {object} [params]
     * @param {number} [params.limit=20] - 取得件数
     * @param {number} [params.offset=0] - 取得開始位置
     * @param {string|null} [params.cursor=null] - ページネーションカーソル
     * @returns {Promise<{ following: object[], has_more: boolean, next_cursor?: string|null }>}
     */
    getFollowing(userId: number, { limit, offset, cursor }?: {
        limit?: number;
        offset?: number;
        cursor?: string | null;
    }): Promise<{
        following: object[];
        has_more: boolean;
        next_cursor?: string | null;
    }>;
    /**
     * ユーザーの固定投稿一覧を取得します。
     *
     * @param {number} userId - ユーザー ID
     * @returns {Promise<{ pinned_posts: object[] }>}
     */
    getPinnedPosts(userId: number): Promise<{
        pinned_posts: object[];
    }>;
    /**
     * 投稿をプロフィールに固定します。
     *
     * @param {number} userId - ユーザー ID
     * @param {number} postId - 投稿 ID
     * @returns {Promise<{ success: boolean }>}
     */
    pinPost(userId: number, postId: number): Promise<{
        success: boolean;
    }>;
    /**
     * プロフィールの固定投稿を解除します。
     *
     * @param {number} userId - ユーザー ID
     * @param {number} postId - 投稿 ID
     * @returns {Promise<{ success: boolean }>}
     */
    unpinPost(userId: number, postId: number): Promise<{
        success: boolean;
    }>;
    /**
     * ユーザーのブロック一覧を取得します。
     *
     * @param {number} userId - ユーザー ID
     * @returns {Promise<{ blocks: object[] }>}
     */
    getBlocks(userId: number): Promise<{
        blocks: object[];
    }>;
    /**
     * ユーザーのミュート一覧を取得します。
     *
     * @param {number} userId - ユーザー ID
     * @returns {Promise<{ mutes: object[] }>}
     */
    getMutes(userId: number): Promise<{
        mutes: object[];
    }>;
    /**
     * ユーザーをミュートします。
     *
     * @param {number} userId - ミュートするユーザー ID
     * @returns {Promise<{ success: boolean }>}
     */
    mute(userId: number): Promise<{
        success: boolean;
    }>;
    /**
     * ユーザーのミュートを解除します。
     *
     * @param {number} userId - ミュート解除するユーザー ID
     * @returns {Promise<{ success: boolean }>}
     */
    unmute(userId: number): Promise<{
        success: boolean;
    }>;
    /**
     * ユーザーをフォローします。
     *
     * @param {number} userId - フォローするユーザー ID
     * @returns {Promise<{ success: boolean, following: boolean, updated_follows: number[] }>}
     */
    follow(userId: number): Promise<{
        success: boolean;
        following: boolean;
        updated_follows: number[];
    }>;
    /**
     * ユーザーのフォローを解除します。
     *
     * @param {number} userId - フォロー解除するユーザー ID
     * @returns {Promise<{ success: boolean, following: boolean, updated_follows: number[] }>}
     */
    unfollow(userId: number): Promise<{
        success: boolean;
        following: boolean;
        updated_follows: number[];
    }>;
    /**
     * ユーザーのブロック状態を切り替えます（ブロック/ブロック解除）。
     *
     * @param {number} userId - ブロック切り替えするユーザー ID
     * @returns {Promise<{ success: boolean, blocked: boolean, block: number[], user_id: number }>}
     */
    toggleBlock(userId: number): Promise<{
        success: boolean;
        blocked: boolean;
        block: number[];
        user_id: number;
    }>;
    /**
     * ユーザーをブロックします。
     *
     * @param {number} userId - ブロックするユーザー ID
     * @returns {Promise<{ success: boolean, blocked: boolean, block: number[], user_id: number }>}
     */
    block(userId: number): Promise<{
        success: boolean;
        blocked: boolean;
        block: number[];
        user_id: number;
    }>;
    /**
     * ユーザーのブロックを解除します。
     *
     * @param {number} userId - ブロック解除するユーザー ID
     * @returns {Promise<{ success: boolean, blocked: boolean, block: number[], user_id: number }>}
     */
    unblock(userId: number): Promise<{
        success: boolean;
        blocked: boolean;
        block: number[];
        user_id: number;
    }>;
    /**
     * 自分のプロフィールや設定を更新します。
     *
     * @param {object} params
     * @param {string} [params.name] - 表示名
     * @param {string} [params.me] - 自己紹介文
     * @param {string} [params.bio] - 自己紹介文
     * @param {string} [params.headerImage] - ヘッダー画像 URL / データ
     * @param {string} [params.iconData] - アイコン画像データ
     * @param {object} [params.settings] - 設定オブジェクト
     * @returns {Promise<{ user: object }>}
     */
    updateProfile({ name, me, bio, headerImage, iconData, settings }?: {
        name?: string;
        me?: string;
        bio?: string;
        headerImage?: string;
        iconData?: string;
        settings?: object;
    }): Promise<{
        user: object;
    }>;
    /**
     * ログイン履歴・ログを取得します。
     *
     * @param {object} [params]
     * @param {number} [params.limit=50] - 取得件数
     * @param {number} [params.offset=0] - 取得開始位置
     * @returns {Promise<{ logs: object[] }>}
     */
    getLogs({ limit, offset }?: {
        limit?: number;
        offset?: number;
    }): Promise<{
        logs: object[];
    }>;
}
