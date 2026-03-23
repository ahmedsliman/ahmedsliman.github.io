import Layout from '../../components/layout';
import Image from 'next/image';

export default function ImagePost() {
  return (
    <Layout>
      <Image
        src="/images/my-pic.jpeg"
        height={144}
        width={144}
        alt="Ahmed Soliman"
        style={{ borderRadius: '50%' }}
      />
    </Layout>
  );
}
