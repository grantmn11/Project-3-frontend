import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import styles from './footer.module.css'

import Github from '../GitHub/GitHub-Mark-120px-plus.png'
import LinkedIn from '../LinkedIn/linkedin.png'


export function Footer(props){
    const popover = (
        <Popover id="popover-basic">
          <Popover.Title as="h3">
          <a href='https://www.linkedin.com/in/grant-ferreira1/'>
            <img className={styles.image} src={LinkedIn}/>
            </a>
          </Popover.Title>
          <Popover.Title >
            <a href='https://github.com/grantmn11'>
            <img className={styles.image} src={Github}/>
            </a>
            </Popover.Title>
          </Popover>
      );
      
      const TryOverlay = () => (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
          <Button  variant="outline-dark"  style={{ marginTop: 5}}>Copyright &copy; Grant Ferreira</Button>
        </OverlayTrigger>
      );
      
      
    return(
        
        <footer className={styles.Footer}>
        <TryOverlay />
            
        </footer>
    )
}

