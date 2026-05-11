import { type MouseEvent, type ReactNode } from 'react'
import { Cross2Icon } from '@radix-ui/react-icons'

interface ModalProps {
  title: ReactNode
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export function Modal({ title, isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 py-6"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="rounded-lg border border-[var(--color-gray-light)] bg-[var(--color-surface)] p-6 w-full max-w-md max-h-[90vh] relative overflow-visible"
        onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar modal"
          className="absolute top-4 right-4 p-1 text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
        >
          <Cross2Icon className="h-5 w-5" />
        </button>
        <h2
          id="modal-title"
          className="mb-6 text-center font-bold text-[var(--color-primary)]"
        >
          {title}
        </h2>
        <div className="max-h-[80vh] overflow-y-auto">{children}</div>
      </div>
    </div>
  )
}
