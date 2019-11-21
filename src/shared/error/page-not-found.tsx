import React from 'react';
import { Paper, Typography } from '@material-ui/core';

class PageNotFound extends React.Component {
  render() {
    return (
      <Paper>
        <Typography variant="h5" component="h3">
          Trang này không tồn tại.
        </Typography>
        <Typography component="p">
          Vui lòng liên hệ nguyenthaiduy277@gmail.com.
        </Typography>
      </Paper>
    );
  }
}

export default PageNotFound;
