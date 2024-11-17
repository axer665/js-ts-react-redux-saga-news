import {Attachment, DataItem} from "../models/models.tsx";

export function getNewsUrl(newsItem: DataItem) {
    let url;
    newsItem.attachments.find((attachment: Attachment) => {
        if (attachment.type === "link") {
            url = attachment.link?.url;
        }
    });
    return url;
}