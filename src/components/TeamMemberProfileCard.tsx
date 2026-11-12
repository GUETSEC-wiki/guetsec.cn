import React from 'react';

interface TeamMemberProfileCardProps {
  className?: string;
  name: string;
  avatar: string;
  description?: string;
  blogUrl?: string;
}

export default function TeamMemberProfileCard({
  className,
  name,
  avatar,
  description,
  blogUrl,
}: TeamMemberProfileCardProps) {
  return (
    <div className={className}>
      <div className="card card--full-height shadow--md">
        <div className="card__header">
          <div className="avatar avatar--vertical">
            <img
              className="avatar__photo avatar__photo--xl"
              src={avatar}
              alt={`${name} 的头像`}
              loading="lazy"
            />
            <div className="avatar__intro">
              <h3 className="avatar__name">{name}</h3>
            </div>
          </div>
        </div>
        {description && <div className="card__body">{description}</div>}
        <div className="card__footer">
          <div className="button-group button-group--block">
            {blogUrl && (
              <a
                className="button button--secondary"
                href={blogUrl}
                target="_blank"
                rel="noopener noreferrer">
                Blog
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
