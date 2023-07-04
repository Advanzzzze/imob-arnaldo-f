import React from 'react'

function AppModal({ isOpen, onRequestClose, children }) {
    if (false) {
        return (
            <div isOpen={isOpen} onRequestClose={onRequestClose}>
                {children}
                <h1>Teste</h1>
            </div>
        )
    }
}

export default AppModal
