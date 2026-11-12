import React from 'react';
import Layout from '@theme/Layout';

type Photo = {
  id: number;
  url: string;
  caption: string;
};

// 照片放在 static/img/album/ 下，按下方格式补充即可上线。
const photos: Photo[] = [];

const AlbumPage: React.FC = () => {
  return (
    <Layout title="相册" description="GUETSEC 活动相册">
      <main className="container margin-vert--lg">
        <div className="text--center margin-bottom--lg">
          <h1>相册</h1>
          <p>社团活动的照片会陆续放到这里。</p>
        </div>
        {photos.length === 0 ? (
          <p className="text--center">照片整理中，敬请期待。</p>
        ) : (
          <div className="row">
            {photos.map(photo => (
              <div key={photo.id} className="col col--4 margin-bottom--lg">
                <div className="card">
                  <div className="card__image">
                    <img src={photo.url} alt={photo.caption} loading="lazy" />
                  </div>
                  <div className="card__body text--center">{photo.caption}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </Layout>
  );
};

export default AlbumPage;
