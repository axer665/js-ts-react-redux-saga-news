import {
    DataItem,
    Attachment,
    AttachmentPhotoSize,
    Size,
    Image
} from "../models/models.tsx";

export function getUrl(newsItem: DataItem) {
    let url;
    newsItem.attachments.find((attachment: Attachment) => {
        if (attachment.type === "link") {
            const photoSize = attachment.link?.photo?.sizes.find(
                (size: AttachmentPhotoSize) => size.width <= 320,
            );
            url = photoSize ? photoSize.url : "https://via.placeholder.com/320x320";
        }
        if (attachment.type === "photo") {
            const photo = attachment.photo?.sizes.find((size: Size) => {
                return size.width <= 320;
            });
            url = photo ? photo.url : "https://via.placeholder.com/320x320";
        }
        if (attachment.type === "video") {
            const image = attachment.video?.image?.find((size: Image) => {
                return size.width <= 320;
            });
            url = image ? image.url : "https://via.placeholder.com/320x320";
        }
    });
    return url;
}