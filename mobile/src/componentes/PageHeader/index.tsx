import React, { ReactNode } from "react";
import { View, Text, Image } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import backIcon from "../../assets/images/icons/back.png";
import logo from "../../assets/images/logo.png";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

interface PageHeaderProps {
  title: string;
  headerRight?: ReactNode; // receber um componente como propriedade
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, children, headerRight }) => {
  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate("Landing");
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>
        <Image source={logo} />
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {headerRight}
      </View>
      {children}
    </View>
  );
};

export default PageHeader;
