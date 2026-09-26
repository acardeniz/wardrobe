import "./WardrobeGrid.css"
import { ClothingSlot } from "../ClothingSlot/ClothingSlot";
import { SLOTS } from "../../slotConfig";

export function WardrobeGrid({ files, onSelectFile, onClearFile}) {
    const pairIds = ['outerwear', 'top'];
    const pairedSlots = pairIds
        .map((slotId) => SLOTS.find((slot) => slot.id === slotId))
        .filter(Boolean);
    const otherSlots = SLOTS.filter((slot) => !pairIds.includes(slot.id));

    const renderSlot = (slot) => (
        <ClothingSlot
            key={slot.id}
            slot={slot}
            file={files[slot.id]}
            onSelectFile={onSelectFile}
            onClearFile={onClearFile}
        />
    );

    return (
        <section className="wardrobe-grid">
            {otherSlots.filter((slot) => slot.id === 'headwear').map(renderSlot)}
            <div className="wardrobe-grid__pair">
                {pairedSlots.map(renderSlot)}
            </div>
            {otherSlots.filter((slot) => slot.id !== 'headwear').map(renderSlot)}
        </section>
    )
}
