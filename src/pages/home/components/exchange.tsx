import { styled } from "@mui/material/styles";
import { Stack, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { currency, icons } from "../../../assets/image";
import { Divider } from "../../../components/divider/divider";
import { FirstButton, ThirdOutlineButton } from "../../../components/buttons/buttons";
import { TransparentTextField } from "../../../components/textfield/textfield";

interface IExchangeProps {
	currency: string;
	value: number;
	label: string;
	title: string;
	icon: string;
}

const Exchange = () => {
	return (
		<ExchangeWrapper>
			<ExchangeContainer>
				<ExchangeInputSection>
					<ExchangeInput label="Send"
						currency="USDT"
						value={0.9382}
						title="Amount Send"
						icon={currency.usdt}
					/>

					<CurrencyExchangeButtonWrapper>
						<CurrencyExchangeButton>
							<img src={icons.exchange} alt="exchange" />
						</CurrencyExchangeButton>
					</CurrencyExchangeButtonWrapper>

					<ExchangeInput label="Receive"
						currency="EUR"
						value={0.9382}
						title="Recived Amount"
						icon={currency.eur}
					/>
				</ExchangeInputSection>

				<ExchangeContent>
					<Typography variant="body2" component="span">
						1 USDT = 1 EUR
					</Typography>

					<Divider />

					<Stack direction="column" gap={0.5}>
						<ContentItem>
							<Typography variant="body1">Exchange Rate</Typography>
							<Typography variant="body1" component="span">1 USDT = 1 EUR</Typography>
						</ContentItem>

						<ContentItem>
							<Typography variant="body1">Fee</Typography>
							<Typography variant="body1" component="span">+2.5 EUR</Typography>
						</ContentItem>

						<ContentItem>
							<Typography variant="body1">Transfer Time</Typography>
							<Typography variant="body1" component="span">1 Min</Typography>
						</ContentItem>
					</Stack>

					<Divider />

					<Stack direction="column" gap={0.5}>
						<ContentItem>
							<Typography variant="body1">Total to Pay</Typography>
							<Typography variant="body1" component="span">102.50 EUR</Typography>
						</ContentItem>

						<ContentItem>
							<Typography variant="body1">Recipient Gets</Typography>
							<Typography variant="body1" component="span">100.00 EUR</Typography>
						</ContentItem>
					</Stack>

					<FirstButton>
						<Typography variant="body2">Continue</Typography>
					</FirstButton>

					<ThirdOutlineButton>
						<Typography variant="body2">Cancel</Typography>
					</ThirdOutlineButton>
				</ExchangeContent>
			</ExchangeContainer>
		</ExchangeWrapper>
	)
}

const ExchangeInput = ({ currency, value, label, title, icon }: IExchangeProps) => {
	return (
		<ExchangeInputWrapper>
			<ExchangeInputHeader>
				<SelectedCurrencyContainer>
					<img src={icon} alt="" />

					<Stack direction="row" alignItems="center">
						<Typography variant="h6">{currency}</Typography>
						<ExpandMoreIcon fontSize="medium" />
					</Stack>
				</SelectedCurrencyContainer>

				<Typography variant="body2">{label}</Typography>
			</ExchangeInputHeader>

			<Stack>
				<ExchangeInputField type="number"
					defaultValue={value}
					placeholder="0.00"
				/>

				<Typography variant="body1" component="span">
					{title}
				</Typography>
			</Stack>
		</ExchangeInputWrapper>
	)
}

const ExchangeInputField = styled(TransparentTextField)(({ theme }) => ({
	input: {
		fontSize: 32,
		textAlign: "center",
		padding: theme.spacing(0, 2),

		[theme.breakpoints.down("md")]: {
			fontSize: 24,
		}
	},
}))

const ExchangeWrapper = styled(Stack)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",

	maxWidth: 600,
	width: "100%",

	borderRadius: "20px",
	backgroundColor: theme.palette.common.white,
	padding: theme.spacing(2),

	[theme.breakpoints.down('md')]: {
		borderRadius: "10px",
		padding: theme.spacing(1.5),
	}
}))

const ExchangeContainer = styled(Stack)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: theme.spacing(1.5),

	[theme.breakpoints.down('md')]: {
		gap: theme.spacing(1),
	}
}))

const ExchangeInputSection = styled(Stack)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: theme.spacing(1.5),
	position: "relative",
}))

const ExchangeInputWrapper = styled(Stack)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: theme.spacing(0),
	padding: theme.spacing(1.5),
	paddingBottom: theme.spacing(3),

	borderRadius: "20px",
	backgroundColor: theme.palette.common.firstSectionBg,

	span: {
		fontWeight: 400,
		textAlign: "center",
	},

	[theme.breakpoints.down('md')]: {
		borderRadius: "10px",
	}
}))

const ExchangeInputHeader = styled(Stack)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-between",

	p: {
		cursor: "pointer",
		fontWeight: 400,
		borderRadius: "10px",
		padding: theme.spacing(0.5, 1),
		backgroundColor: theme.palette.common.white,
		color: theme.palette.common.firstTypography,
	},
}))

const SelectedCurrencyContainer = styled(Stack)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	gap: theme.spacing(1),
	cursor: "pointer",
	userSelect: "none",

	img: {
		width: 35,
		height: 35,
	},

	h6: {
		fontWeight: 500,
	},

	svg: {
		color: theme.palette.common.firstTypography,
	},

	[theme.breakpoints.down('md')]: {
		gap: theme.spacing(0.5),

		img: {
			width: 25,
			height: 25,
		},
	}
}))

const CurrencyExchangeButtonWrapper = styled(Stack)(({ theme }) => ({
	position: "absolute",
	top: "50%", left: "50%",
	transform: "translate(-50%, -50%)",

	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: theme.palette.common.white,
	borderRadius: "50%",
	padding: theme.spacing(1.2),
}))

const CurrencyExchangeButton = styled(FirstButton)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	cursor: "pointer",
	userSelect: "none",

	minWidth: "unset",
	borderRadius: "50%",
	padding: theme.spacing(1.5),
	backgroundColor: theme.palette.common.firstButton,

	img: {
		width: 20,
		height: 20,
	}
}))

const ExchangeContent = styled(Stack)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: theme.spacing(1.5),

	span: {
		textAlign: "center",
	},

	button: {
		padding: theme.spacing(1.5, 2),
	},

	[theme.breakpoints.down('md')]: {
		gap: theme.spacing(1),

		button: {
			padding: theme.spacing(1, 1.5),
		},
	},
}))

const ContentItem = styled(Stack)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-between",
	padding: theme.spacing(0, 0.5),

	p: {
		fontWeight: 400,
		color: theme.palette.common.secondTypography,
	},

	span: {
		fontWeight: 600,
	},
}))

export { Exchange };
