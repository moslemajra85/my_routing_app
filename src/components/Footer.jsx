import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 text-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
                    {/* Brand */}
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-400 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
                            A
                        </div>
                        <div>
                            <div className="text-lg font-semibold text-white">My Routing App</div>
                            <div className="text-sm text-slate-400">Lightweight routing & utilities</div>
                        </div>
                    </div>

                    {/* Links */}
                    <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-6">
                        <Link to="/about" className="text-sm text-slate-200 hover:text-white hover:underline">
                            About
                        </Link>
                        <Link to="/docs" className="text-sm text-slate-200 hover:text-white hover:underline">
                            Docs
                        </Link>
                        <Link to="/pricing" className="text-sm text-slate-200 hover:text-white hover:underline">
                            Pricing
                        </Link>
                        <Link to="/privacy" className="text-sm text-slate-200 hover:text-white hover:underline">
                            Privacy
                        </Link>
                        <Link to="/contact" className="text-sm text-slate-200 hover:text-white hover:underline">
                            Contact
                        </Link>
                    </nav>

                    {/* Social & copyright */}
                    <div className="flex flex-col items-center lg:items-end gap-4">
                        <div className="flex gap-3">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg bg-transparent border border-slate-700 flex items-center justify-center text-slate-200 hover:bg-slate-800"
                                aria-label="GitHub"
                            >
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                    <path d="M12 .5C5.7.5.8 5.4.8 11.7c0 4.8 3.1 8.9 7.3 10.3.5.1.7-.2.7-.5v-1.9c-3 .7-3.6-1.2-3.6-1.2-.5-1.1-1.2-1.4-1.2-1.4-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.9 1.5.9 1.5.9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.4-.3-4.9-1.2-4.9-5.3 0-1.1.4-2 1.2-2.8-.1-.3-.5-1.4.1-2.9 0 0 1-.3 3.3 1.2.9-.3 1.9-.5 2.8-.5s1.9.2 2.8.5c2.2-1.5 3.3-1.2 3.3-1.2.6 1.5.2 2.6.1 2.9.8.8 1.2 1.7 1.2 2.8 0 4.1-2.5 4.9-4.9 5.3.4.3.8 1 .8 2v3c0 .3.2.6.7.5 4.2-1.4 7.3-5.5 7.3-10.3C23.2 5.4 18.3.5 12 .5z" />
                                </svg>
                            </a>

                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg bg-transparent border border-slate-700 flex items-center justify-center text-slate-200 hover:bg-slate-800"
                                aria-label="Twitter"
                            >
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                    <path d="M22.2 5.8c-.6.3-1.2.5-1.8.6.6-.4 1-1 1.2-1.8-.6.4-1.3.7-2.1.9C18.9 4.7 17.9 4 16.7 4c-1.7 0-3 1.4-3 3.2 0 .3 0 .6.1.9-2.5-.1-4.8-1.4-6.3-3.3-.3.5-.5 1.1-.5 1.8 0 1.1.6 2.1 1.6 2.7-.5 0-1-.2-1.5-.4v.1c0 1.7 1.2 3.2 2.8 3.5-.3.1-.7.1-1 .1-.3 0-.6 0-.8-.1.6 2 2.4 3.4 4.5 3.5-1.6 1.2-3.6 1.9-5.8 1.9-.4 0-.8 0-1.1-.1C6.2 21 8.6 22 11.2 22c6.6 0 10.2-5.7 10.2-10.7v-.5c.7-.5 1.2-1.2 1.6-2z" />
                                </svg>
                            </a>

                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg bg-transparent border border-slate-700 flex items-center justify-center text-slate-200 hover:bg-slate-800"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                    <path d="M4.98 3.5C3.34 3.5 2 4.84 2 6.48s1.34 2.98 2.98 2.98S7.96 8.12 7.96 6.48 6.62 3.5 4.98 3.5zM2.4 8.98h5.16V21H2.4zM9.6 8.98h4.96v1.64h.07c.69-1.3 2.38-2.67 4.9-2.67 5.24 0 6.2 3.45 6.2 7.94V21h-5.16v-6.08c0-1.45-.03-3.32-2.02-3.32-2.02 0-2.33 1.58-2.33 3.21V21H9.6z" />
                                </svg>
                            </a>
                        </div>

                        <div className="text-sm text-slate-400">
                            &copy; {year} My Routing App — All rights reserved
                        </div>
                    </div>
                </div>

                <div className="mt-6 border-t border-slate-800 pt-6 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div>Built with ♥ · Lightweight routing</div>
                    <div className="flex gap-4">
                        <Link to="/terms" className="hover:underline">Terms</Link>
                        <Link to="/security" className="hover:underline">Security</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer