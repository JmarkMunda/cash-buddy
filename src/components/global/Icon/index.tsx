import React from "react";
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from "@expo/vector-icons";

type IconPropsType<T> = {
  name: T;
  size?: number;
  color?: string;
};

const AntDesignSet = (props: IconPropsType<keyof typeof AntDesign.glyphMap>) => (
  <AntDesign {...props} />
);
const EntypoSet = (props: IconPropsType<keyof typeof Entypo.glyphMap>) => <Entypo {...props} />;
const EvilIconsSet = (props: IconPropsType<keyof typeof EvilIcons.glyphMap>) => (
  <EvilIcons {...props} />
);
const FeatherSet = (props: IconPropsType<keyof typeof Feather.glyphMap>) => <Feather {...props} />;
const FontAwesomeSet = (props: IconPropsType<keyof typeof FontAwesome.glyphMap>) => (
  <FontAwesome {...props} />
);
const FontAwesome5Set = (props: IconPropsType<keyof typeof FontAwesome5.glyphMap>) => (
  <FontAwesome5 {...props} />
);
const FontistoSet = (props: IconPropsType<keyof typeof Fontisto.glyphMap>) => (
  <Fontisto {...props} />
);
const FoundationSet = (props: IconPropsType<keyof typeof Foundation.glyphMap>) => (
  <Foundation {...props} />
);
const IoniconsSet = (props: IconPropsType<keyof typeof Ionicons.glyphMap>) => (
  <Ionicons {...props} />
);
const MaterialCommunityIconsSet = (
  props: IconPropsType<keyof typeof MaterialCommunityIcons.glyphMap>,
) => <MaterialCommunityIcons {...props} />;
const MaterialIconsSet = (props: IconPropsType<keyof typeof MaterialIcons.glyphMap>) => (
  <MaterialIcons {...props} />
);
const OcticonsSet = (props: IconPropsType<keyof typeof Octicons.glyphMap>) => (
  <Octicons {...props} />
);
const SimpleLineIconsSet = (props: IconPropsType<keyof typeof SimpleLineIcons.glyphMap>) => (
  <SimpleLineIcons {...props} />
);
const ZocialSet = (props: IconPropsType<keyof typeof Zocial.glyphMap>) => <Zocial {...props} />;

export default {
  AntDesignSet,
  EntypoSet,
  EvilIconsSet,
  FeatherSet,
  FontAwesomeSet,
  FontAwesome5Set,
  FontistoSet,
  FoundationSet,
  IoniconsSet,
  MaterialCommunityIconsSet,
  MaterialIconsSet,
  OcticonsSet,
  SimpleLineIconsSet,
  ZocialSet,
};
