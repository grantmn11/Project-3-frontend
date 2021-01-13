import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import styles from './footer.module.css'

export function Footer(props){
    const popover = (
        <Popover id="popover-basic">
          <Popover.Title as="h3">Popover right</Popover.Title>
          <Popover.Content>
            And here's some <strong>amazing</strong> content. It's very engaging.
            right?
          </Popover.Content>
        </Popover>
      );
      
      const Example = () => (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
          <Button variant="success">Click me to see</Button>
        </OverlayTrigger>
      );
      
      
    return(
        
        <footer className={styles.Footer}>
        <Example />
            Copyright &copy; Grant Ferreira
        </footer>
    )
}

// const popover = (
//     <Popover id="popover-basic">
//       <Popover.Title as="h3">Popover right</Popover.Title>
//       <Popover.Content>
//         And here's some <strong>amazing</strong> content. It's very engaging.
//         right?
//       </Popover.Content>
//     </Popover>
//   );
  
//   const Example = () => (
//     <OverlayTrigger trigger="click" placement="right" overlay={popover}>
//       <Button variant="success">Click me to see</Button>
//     </OverlayTrigger>
//   );
  
//   render(<Example />);