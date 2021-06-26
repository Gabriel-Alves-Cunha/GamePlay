import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";

import { Container, LinGrad, Content, CheckedSquare, Title } from "./styles";

import theme from "../../global/styles/theme";

type Props = RectButtonProps & {
	icon: React.FC<SvgProps>;
	hasCheckBox?: boolean;
	checked?: boolean;
	title: string;
};

export function Category({
	hasCheckBox = false,
	checked = false,
	icon: Icon,
	title,
	...rest
}: Props) {
	const { secondary40, secondary50, secondary70, secondary85 } = theme.colors;

	return (
		<Container {...rest}>
			<LinGrad colors={[secondary50, secondary70]}>
				<Content
					checked={checked}
					colors={[checked ? secondary85 : secondary50, secondary40]}
				>
					{hasCheckBox && <CheckedSquare checked={checked} />}

					<Icon width={48} height={48} />

					<Title>{title}</Title>
				</Content>
			</LinGrad>
		</Container>
	);
}
