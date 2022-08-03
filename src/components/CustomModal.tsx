import { Modal, ModalProps } from 'flowbite-react'

interface CustomModalProps extends ModalProps {
  show: boolean;
  onClose: () => void;
  title: string | JSX.Element;
  body: React.ReactNode;
  footer?: React.ReactNode;
}

export default function CustomModal(props: CustomModalProps) {
  const { show, onClose, title, body, footer, ...rest } = props;

  return (
    <Modal
      show={show}
      onClose={onClose}
      {...rest}
    >
      <Modal.Header>
        {title}
      </Modal.Header>
      <Modal.Body>
        {body}
      </Modal.Body>
      <Modal.Footer>
        {footer}
      </Modal.Footer>
    </Modal>
  )
}