import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faList as fasList,
  faBars as fasBars,
  faMusic as fasMusic,
  faSignOutAlt as fasSignOutAlt,
  faRedo as fasRedo,
  faEdit as fasEdit,
  faHeart as fasHeart,
  faPlus as fasPlus,
  faHistory as fasHistory,
  faClock as fasClock,
  faTrashAlt as fasTrashAlt,
  faStream as fasStream,
  faFileAudio as fasFileAudio,
  faDownload as fasDownload,
  faPlay as fasPlay,
  faBackward as fasBackward,
  faForward as fasForward,
  faVolumeDown as fasVolumeDown,
  faPause as fasPause,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add([
  fasList,
  fasBars,
  fasMusic,
  fasSignOutAlt,
  fasRedo,
  fasEdit,
  fasHeart,
  farHeart,
  fasPlus,
  fasHistory,
  fasClock,
  fasTrashAlt,
  fasStream,
  fasFileAudio,
  fasDownload,
  fasPlay,
  fasBackward,
  fasForward,
  fasVolumeDown,
  fasPause,
]);

export { FontAwesomeIcon };
