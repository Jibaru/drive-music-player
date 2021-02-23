import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faList as fasList,
  faBars as fasBars,
  faMusic as fasMusic,
  faSignOutAlt as fasSignOutAlt,
  faRedo as fasRedo,
  faEdit as fasEdit,
  faHeart as fasHeart,
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
]);

export { FontAwesomeIcon };
