import { useState, useRef } from 'react';
import SectionHeading from '../common/SectionHeading';

const VideoProfile = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const videoRef = useRef(null);

  // To use a real video: place your video file at public/profile_video.mp4
  // Then replace `videoSrc` below with './profile_video.mp4'
  const videoSrc = null; // ← Replace with './profile_video.mp4' after adding your video

  const handlePlay = () => {
    if (!videoSrc) {
      setShowModal(true);
      return;
    }
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleModalClose = () => setShowModal(false);

  return (
    <>
      <section id="video-profile" className="scroll-mt-20 py-20">
        <SectionHeading
          eyebrow="VIDEO INTRODUCTION"
          title="Meet the engineer behind the code"
          description="A short professional introduction covering my engineering background, areas of expertise, and the kind of challenges I enjoy solving."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_0.7fr] items-center">

          {/* ── Video Player / Placeholder ── */}
          <div className="group relative w-full overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900 shadow-2xl shadow-sky-950/50">
            {/* Ambient glow */}
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-sky-500/20 via-transparent to-indigo-500/20 pointer-events-none" aria-hidden="true" />

            {videoSrc ? (
              <video
                ref={videoRef}
                src={videoSrc}
                poster="./profile.jpg"
                controls={isPlaying}
                preload="metadata"
                className="w-full rounded-2xl"
                onEnded={() => setIsPlaying(false)}
              />
            ) : (
              /* Placeholder when no video is uploaded yet */
              <div className="relative aspect-video w-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
                {/* Grid background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:32px_32px] opacity-30 rounded-2xl" />

                {/* Profile photo preview */}
                <div className="relative z-10 flex flex-col items-center gap-6">
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 opacity-50 blur-sm" />
                    <img
                      src="./profile.jpg"
                      alt="Harshal Arun Jaware"
                      className="relative h-28 w-28 rounded-full border-4 border-slate-800 object-cover object-[center_20%] shadow-xl"
                    />
                  </div>

                  {/* Play button */}
                  <button
                    type="button"
                    onClick={handlePlay}
                    aria-label="Play video profile introduction"
                    className="group/play relative flex h-16 w-16 items-center justify-center rounded-full border-2 border-sky-400/60 bg-sky-500/20 text-sky-300 backdrop-blur-sm transition hover:border-sky-400 hover:bg-sky-500/30 hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-400"
                  >
                    <span className="absolute inset-0 rounded-full bg-sky-400/10 animate-ping opacity-60" aria-hidden="true" />
                    <svg className="h-6 w-6 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>

                  <div className="text-center">
                    <p className="text-sm font-semibold text-white">Harshal Arun Jaware</p>
                    <p className="mt-0.5 text-xs text-slate-400">Senior Software Developer</p>
                    <p className="mt-2 text-[11px] text-slate-500">Video Introduction · ~2 min</p>
                  </div>
                </div>

                {/* Duration badge */}
                <span className="absolute bottom-4 right-4 rounded-md bg-slate-900/90 px-2 py-1 text-[11px] font-semibold text-slate-300 border border-slate-700">
                  ▶ Video Profile
                </span>
              </div>
            )}
          </div>

          {/* ── Right: Key Points ── */}
          <div className="space-y-5">
            <div>
              <h3 className="text-xl font-bold text-white">
                What you will learn from this introduction
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                A concise walkthrough of my engineering background, primary technology areas, and the professional values that define how I approach complex software challenges.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                {
                  icon: '🏗️',
                  label: 'Engineering Background',
                  detail: '8 years 9 months across transportation, ERP, simulation, and enterprise platforms.',
                },
                {
                  icon: '⚙️',
                  label: 'Core Technology Expertise',
                  detail: 'Node.js, React.js, PostgreSQL, AWS, System Design, Three.js (3JS), and Agentic Coding.',
                },
                {
                  icon: '🔗',
                  label: 'API & Integration Experience',
                  detail: 'Uber, Lyft, Google Maps, Slack, Zoho CRM, QuickBooks, and webhook architectures.',
                },
                {
                  icon: '📐',
                  label: 'Domain-Specific Engineering & 3D',
                  detail: 'Interactive 3D utility pole models (Three.js), power system simulation, and SLD topology.',
                },
                {
                  icon: '🤝',
                  label: 'Collaboration & Delivery',
                  detail: 'Agile teams, direct domain expert collaboration, and full SDLC ownership.',
                },
              ].map((point) => (
                <li key={point.label} className="flex items-start gap-3 rounded-xl border border-slate-700/60 bg-slate-900/60 p-3.5 backdrop-blur-sm">
                  <span className="text-xl" aria-hidden="true">{point.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-white">{point.label}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-slate-400">{point.detail}</p>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-sky-400 transition hover:text-sky-300"
            >
              <span>Schedule a live call instead</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Upload Reminder Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
          onClick={(e) => { if (e.target === e.currentTarget) handleModalClose(); }}
        >
          <div className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900 p-7 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-lg">
                🎬
              </span>
              <h2 id="video-modal-title" className="text-lg font-bold text-white">
                Add Your Video Introduction
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-slate-300 mb-4">
              To activate this section, record a short 1–2 minute professional introduction video and place it in your project:
            </p>

            <div className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 font-mono text-xs text-sky-400 mb-5">
              📁 public/profile_video.mp4
            </div>

            <p className="text-xs text-slate-400 mb-6">
              Then open{' '}
              <code className="text-sky-400">src/components/sections/VideoProfile.jsx</code>{' '}
              and update <code className="text-sky-400">videoSrc</code> from <code className="text-slate-400">null</code> to{' '}
              <code className="text-sky-400">&apos;./profile_video.mp4&apos;</code>.
            </p>

            <button
              type="button"
              onClick={handleModalClose}
              className="w-full rounded-lg bg-sky-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 cursor-pointer"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoProfile;
