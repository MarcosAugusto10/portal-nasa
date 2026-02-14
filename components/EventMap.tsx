import dynamic from "next/dynamic";

const EventMap = dynamic(() => import("./EventMapClient"), {
  ssr: false,
});

export default EventMap;
