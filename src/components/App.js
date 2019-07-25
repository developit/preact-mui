import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';

function MadeWithLove() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
      Based on the{' '}
			<Link href="https://github.com/mui-org/material-ui/tree/master/examples/preact">
        original example
			</Link>
			{' '}by the Material-UI team.
		</Typography>
	);
}

export default function App() {
	return (
		<Container maxWidth="sm">
			<Box my={4}>
				<Typography variant="h4" component="h1" gutterBottom>
          Material UI Preact Example
				</Typography>
				<Typography variant="h5" component="h2" gutterBottom>
          Material UI 7 + Preact X + Preact CLI
				</Typography>
				<ProTip />
				<MadeWithLove />
			</Box>
		</Container>
	);
}