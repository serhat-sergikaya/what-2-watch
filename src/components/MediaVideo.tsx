import useVideos from "../hooks/useVideos";
import IframeResizer from "@iframe-resizer/react";
interface Props {
  mediaId: number;
}

const MediaVideo = ({ mediaId }: Props) => {
  const { data, isLoading, error } = useVideos(mediaId);

  const videoKey = data?.results[0]?.key;

  const youtubeLink = "https://www.youtube.com/embed/" + videoKey;

  console.log(youtubeLink);
  return (
    <IframeResizer
      license="xxx"
      src={youtubeLink}
      style={{ width: "100%", height: "450px" }}
      allow="fullscreen"
    />
  );
};

export default MediaVideo;
