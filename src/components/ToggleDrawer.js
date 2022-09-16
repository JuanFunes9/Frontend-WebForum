import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MenuIcon from '@mui/icons-material/Menu';
import CategoryIcon from '@mui/icons-material/Category';
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';

const ToggleDrawer = () => {
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => (
		<Box
			sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemIcon>
							<PersonIcon />
						</ListItemIcon>
						<ListItemText primary="Profile" />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemIcon>
							<InboxIcon />
						</ListItemIcon>
						<ListItemText primary="Inbox" />
					</ListItemButton>
				</ListItem>
				

			</List>
			<Divider />
			<List>
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemIcon>
							<CategoryIcon />
						</ListItemIcon>
						<ListItemText primary="Categories" />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemIcon>
							<InfoIcon />
						</ListItemIcon>
						<ListItemText primary="About Us" />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemIcon>
							<LogoutIcon />
						</ListItemIcon>
						<ListItemText primary="Log Out" />
					</ListItemButton>
				</ListItem>
			</List>
		</Box>
	);

	return (
		<div>
			{['left'].map((anchor) => (
				<React.Fragment key={anchor}>
					<MenuIcon onClick={toggleDrawer(anchor, true)} />
					<Drawer
						anchor={anchor}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}
					>
						{list(anchor)}
					</Drawer>
				</React.Fragment>
			))}
		</div>
	);
}

export default ToggleDrawer;
