import { useRef } from 'react';
import { useObjectUrl } from '../../../hooks/useObjectUrl';

export function ClothingSlot({ slot, file, onSelectFile, onClearFile}) {
    const fileInputRef = useRef(null);
    const previewUrl = useObjectUrl(file);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            onSelectFile(slot.id, selectedFile);
            e.target.value = '';
        }

    };

    const handleClick = () => {
        if (!file && fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div
        onClick={handleClick}
        className={`clothing-slot ${file ? 'filled' : ''}`}        
        >

            <input type="file"
             ref={fileInputRef}
             onChange={handleFileChange}
             accept="image/*"
             className="clothing-slot-input"
             />

            {file ? (
                <>
                <img src={previewUrl}
                 alt={slot.label}
                 className='clothing-slot-image'
                 />

                 <button
                 type="button"
                 className="clothing-slot-remove"
                 onClick={(e) => {
                    e.stopPropagation();
                    onClearFile(slot.id);
                 }}
                 >x</button>
                </>
            ) : ( 
                <div className='clothing-slot-empty'>
                    <span className='clothing-slot-label'>{slot.label}</span>
                    <span className='clothing-slot-hint'> + Image</span>
                </div>
            )}

        </div>
        
    );
}