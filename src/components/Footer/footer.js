import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import styles from './footer.module.css'
import { Link } from 'react-router-dom'

export function Footer(props){
    const popover = (
        <Popover id="popover-basic">
          <Popover.Title as="h3">LinkedIn</Popover.Title>
          <Popover.Content>
            <a href='https://www.linkedin.com/in/grant-ferreira1/'>LinkedIn</a>
            <Popover.Title as="h3">GitHub</Popover.Title>
            <a href='https://github.com/grantmn11'>GitHub</a>
          </Popover.Content>
        </Popover>
      );
      
      const Example = () => (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
          <Button variant="dark">Copyright &copy; Grant Ferreira</Button>
        </OverlayTrigger>
      );
      
      
    return(
        
        <footer className={styles.Footer}>
        <Example />
            
        </footer>
    )
}

