import { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';

export default function Home() {
  const history = useHistory();

  useEffect(() => {
    history.replace('/TCC-Inteli/intro'); // Redireciona corretamente no GitHub Pages
  }, []);

  return null;
}
