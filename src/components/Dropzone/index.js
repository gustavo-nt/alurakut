import { useCallback, useEffect, useState } from 'react';
import { FiUpload, FiXCircle } from 'react-icons/fi';

import { Container, Box, DeleteIcon } from './styles';

export default function Dropzone({ imageUrl, onRemove }) {
  const [selectedFileUrl, setSelectedFileUrl] = useState(imageUrl);

  useEffect(() => {
    var img = new Image();
    img.src = imageUrl;

    img.onload = function () {
      setSelectedFileUrl(imageUrl);
    };

    img.onerror = function () {
      setSelectedFileUrl('');
    };
  }, [imageUrl]);

  const onClickRemove = useCallback((e) => {
    e.stopPropagation();

    onRemove();
    setSelectedFileUrl('');
  }, []);

  return (
    <Container>
      {selectedFileUrl ? (
        <img src={selectedFileUrl} alt="Thumbnail" />
      ) : (
        <Box>
          <FiUpload />
          <span>Preview da capa da Comunidade</span>
        </Box>
      )}

      {selectedFileUrl && (
        <DeleteIcon onClick={onClickRemove}>
          <FiXCircle />
        </DeleteIcon>
      )}
    </Container>
  );
};