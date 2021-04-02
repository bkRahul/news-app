import React from 'react'
import styled from 'styled-components'
import { getArticleTime } from '../../../utils'

const CardImage = styled.div`
	width: 100%;
	background: url(${props => props.urlToImage});
	height: 16em;
	background-size: cover;
	border-top-left-radius: 0.25em;
	border-top-right-radius: 0.25em;
`
const CardBody = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 230px;
	padding: 1.25em;
`

const CardTitle = styled.a`
	position: relative;
	color: rgba(0, 0, 0, 1);
	text-decoration: none;
	font-weight: 600;
	transition: all 200ms ease;
`
const CardText = styled.p`
	font-size: 0.9em;
	color: rgba(0, 0, 0, 0.5);
	line-height: 1.35;
	font-weight: 500;
	position: relative;
	height: 5.5em;
	overflow: hidden;
	&:after {
		content: '';
		text-align: right;
		position: absolute;
		bottom: 0;
		right: 0;
		width: 70%;
		height: 1.2em;
		background: linear-gradient(
			to right,
			rgba(255, 255, 255, 0),
			rgba(255, 255, 255, 1) 50%
		);
	}
`
const PostMeta = styled.div`
	margin-top: auto;
	font-size: 0.8em;
	line-height: 1.45;
	font-weight: 600;
	color: rgba(0, 0, 0, 0.5);
	span {
		color: #0a0a0a;
		margin-left: 10px;
		padding-left: 5px;
		display: inline-block;
		position: relative;

		&:before {
			display: block;
			position: absolute;
			top: 1px;
			left: -4px;
			content: '•';
		}
	}
`

const Card = styled.div`
	grid-row-end: span 11;
	display: flex;
	position: relative;
	box-shadow: 0px 10px 25px -13px rgb(0 0 0 / 10%);
	flex-direction: column;
	border-radius: 0.25rem;
	background-color: #fff;
	&:nth-child(2n + 2) {
		grid-row-end: span 6;

		${CardImage} {
			filter: blur(1px) grayscale(20%);
		}
		${CardBody} {
			position: absolute;
			color: #fff;
			text-shadow: 1px 0 0 #000;
		}
		${CardTitle} {
			color: inherit;
		}
		${CardText} {
			color: #fff;
			&:after {
				content: none;
			}
		}
		${PostMeta} {
			color: inherit;
			span {
				color: inherit;
			}
		}
	}
`

export const Category = ({
	url,
	author,
	content,
	description,
	publishedAt,
	title,
	urlToImage,
}) => {
	return (
		<Card>
			<CardImage urlToImage={urlToImage} />
			<CardBody>
				<CardTitle href={url}>
					{title.length > 100
						? title.substring(0, 100) + '...'
						: title}
				</CardTitle>
				<CardText>{description}</CardText>
				<PostMeta>
					{author.length > 22
						? author.substring(0, 22) + '...'
						: author}
					<span>{getArticleTime(publishedAt, 'headline')}</span>
				</PostMeta>
			</CardBody>
		</Card>
	)
}
