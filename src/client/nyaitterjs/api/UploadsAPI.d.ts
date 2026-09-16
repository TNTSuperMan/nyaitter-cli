/**
 * アップロード / メディア API
 * 画像や添付ファイルのアップロード・ストレージ使用量確認・ファイル削除などを行います。
 */
export declare class UploadsAPI {
    _client: any;
    /** @param {import('../NyaitterClient').NyaitterClient} client */
    constructor(client: import('../NyaitterClient').NyaitterClient);
    uploadPartResponse(uploadId: any, file: any, { contentType, asUserId }?: {
        asUserId?: null | undefined;
        contentType?: string | undefined;
    }): any;
    /**
     * 画像などのファイルを Nyaitter サーバーにアップロードします。
     *
     * @param {object} params
     * @param {string|Buffer|Uint8Array|ArrayBuffer|Blob} params.file - ファイルデータ
     * @param {string} params.fileName - ファイル名
     * @param {string} [params.contentType='image/png'] - MIME タイプ
     * @param {number} [params.asUserId] - インポスター代理アップロード時のユーザー ID
     * @returns {Promise<{ id: string, url: string, contentType: string, size: number }>}
     */
    upload({ file, fileName, contentType, asUserId }?: {
        file: string | Buffer | Uint8Array | ArrayBuffer | Blob;
        fileName: string;
        contentType?: string;
        asUserId?: number;
    }): Promise<{
        id: string;
        url: string;
        contentType: string;
        size: number;
    }>;
    /**
     * 自分のストレージ使用状況とファイル一覧を取得します。
     *
     * @returns {Promise<{ limit_mb: number, limit_bytes: number, used_bytes: number, used_percent: number, files: Array<{ id: string, url: string, size: number, lastModified: string }> }>}
     */
    getStorage(): Promise<{
        limit_mb: number;
        limit_bytes: number;
        used_bytes: number;
        used_percent: number;
        files: Array<{
            id: string;
            url: string;
            size: number;
            lastModified: string;
        }>;
    }>;
    /**
     * アップロード済みファイルを削除します。
     *
     * @param {object|string[]} params - 削除するファイル ID リストまたはオプション
     * @param {string[]} [params.fileIds] - ファイル ID 配列
     * @param {number} [params.asUserId] - インポスター代理削除時のユーザー ID
     * @returns {Promise<{ success: boolean, deleted_count: number }>}
     */
    delete(params: object | string[]): Promise<{
        success: boolean;
        deleted_count: number;
    }>;
    /**
     * 添付画像ファイルのサムネイルURL を取得します。
     *
     * @param {string} fileId - ファイル ID
     * @returns {string} プレビュー URL
     */
    getPreviewUrl(fileId: string): string;
}
