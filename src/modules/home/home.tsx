import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { connect } from 'react-redux';

class Home extends React.Component {
  render() {
    return (
      <Paper>
        <Typography variant="h5" component="h3">
          Đây là trang chủ.
        </Typography>
        <Typography component="p">
          Hiện tại chưa có gì.
        </Typography>
      </Paper>
    );
  }
}

const mapStateToProps = storeState => ({
    
  });
  
  const mapDispatchToProps = {  };
  
  type StateProps = ReturnType<typeof mapStateToProps>;
  type DispatchProps = typeof mapDispatchToProps;
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home);
  
