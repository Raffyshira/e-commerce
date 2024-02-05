import React from "react";
import { Slider, CheckboxGroup, Checkbox } from "@nextui-org/react";

export const RangePrice = () => {
    return (
        <>
            <Slider
                label="Price Range"
                size="sm"
                color="foreground"
                step={50}
                minValue={500}
                maxValue={30000}
                defaultValue={[1000, 20000]}
                formatOptions={{ style: "currency", currency: "IDR" }}
                className="max-w-full"
            />
        </>
    );
};

export const Diskon = () => {
    const [selected, setSelected] = React.useState([]);
    return (
        <>
            <CheckboxGroup
                color="default"
                size="lg"
                radius="none"
                label="Pilih Diskon"
                value={selected}
                onValueChange={setSelected}
            >
                <Checkbox value="10%">10%</Checkbox>
                <Checkbox value="20%">20%</Checkbox>
                <Checkbox value="30%">30%</Checkbox>
                <Checkbox value="40%">40%</Checkbox>
                <Checkbox value="50%">50%</Checkbox>
            </CheckboxGroup>
                        <p className="mt-3 text-default-500 text-small">
                Selected: {selected.join(", ")}
            </p>
        </>
    );
};
