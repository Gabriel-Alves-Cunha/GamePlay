import React from "react";
import { TextInputProps } from "react-native";

import { Container } from "./styles";

export function TextArea({ ...props }: TextInputProps) {
	return <Container {...props} />;
}
