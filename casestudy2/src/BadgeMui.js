import  React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

function NotificationsLabel(count) {
  // const [totalCountries, setTotalCountries] = useState(null);
  if (count === 0) {
    return 'no notifications';
  }
  if (count > 99) {
    return 'more than 99 notifications';
  }
  return `${count} notifications`;
}

export default function AccessibleBadges() {
  
  return (
    <IconButton aria-label={NotificationsLabel(100)}>
      <Badge badgeContent={20} color="secondary">
        <PermIdentityIcon />
      </Badge>
    </IconButton>
  );
}