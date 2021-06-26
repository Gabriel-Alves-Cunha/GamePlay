import React from "react";

import { categories } from "../../utils/categories";
import { Category } from "../Category";

import { Container } from "./styles";

type Props = {
	setCategory(CategoryId: string): void;
	categorySelected: string;
	hasCheckedBox?: boolean;
};

export function CategorySelect({
	hasCheckedBox = false,
	categorySelected,
	setCategory,
}: Props) {
	return (
		<Container
			horizontal
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={{ paddingRight: 40 }}
		>
			{categories.map((category) => (
				<Category
					key={category.id}
					title={category.title}
					icon={category.icon}
					checked={category.id === categorySelected}
					onPress={() => setCategory(category.id)}
					hasCheckBox={hasCheckedBox}
				/>
			))}
		</Container>
	);
}
