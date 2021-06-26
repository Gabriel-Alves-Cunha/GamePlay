import React from "react";
import { TextInputProps } from "react-native";

import { Container } from "./styles";

export function SmallInput({ ...props }: TextInputProps) {
	return <Container keyboardType="numeric" {...props} />;
}
