import Image from 'next/image';

interface ScreenshotPlaceholderProps {
  /** Path to image in /public, e.g. "/screenshots/dashboard.png" */
  src?: string;
  alt: string;
  /** Aspect ratio class, e.g. "aspect-video" or "aspect-[4/3]" */
  aspect?: string;
  caption?: string;
  className?: string;
  priority?: boolean;
}

/**
 * Renders a screenshot image if `src` exists, otherwise shows a styled placeholder.
 * Drop real screenshots into public/screenshots/ and pass the path as `src`.
 */
export function ScreenshotPlaceholder({
  src,
  alt,
  aspect = 'aspect-video',
  caption,
  className = '',
  priority = false,
}: ScreenshotPlaceholderProps) {
  return (
    <figure className={className}>
      <div
        className={`relative ${aspect} w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-lg`}
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          />
        ) : (
          <div className="screenshot-placeholder absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
            <svg className="w-12 h-12 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z"
              />
            </svg>
            <span className="text-sm font-medium text-slate-400 text-center">{alt}</span>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-slate-500">{caption}</figcaption>
      )}
    </figure>
  );
}

interface VideoPlaceholderProps {
  /** YouTube or Vimeo embed URL */
  embedUrl?: string;
  alt: string;
  className?: string;
}

/**
 * Renders a video embed if `embedUrl` exists, otherwise shows a play-button placeholder.
 */
export function VideoPlaceholder({ embedUrl, alt, className = '' }: VideoPlaceholderProps) {
  return (
    <div className={className}>
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-900 shadow-xl">
        {embedUrl ? (
          <iframe
            src={embedUrl}
            title={alt}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-slate-800 to-slate-900">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600/20 ring-2 ring-blue-500/30">
              <svg className="w-10 h-10 text-blue-400 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="text-sm font-medium text-slate-400">{alt}</span>
            <span className="text-xs text-slate-500">Demo video coming soon</span>
          </div>
        )}
      </div>
    </div>
  );
}
