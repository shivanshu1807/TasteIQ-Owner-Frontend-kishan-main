import React, { useState } from "react";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import CustomSelect from "../common/CustomSelect";
import axios from "axios";

const AddItem = () => {
  const InputsText = ["Name", "Description", "Category", "Serving Size", "Allergens", "Calories", "Weight", "Special Label"];
  const DishType = ["Veg", "Non-Veg", "Egg"];
  const options = [
    { value: "5", label: "5% GST" },
    { value: "2.5", label: "2.5% GST" },
  ];

  const [outletId, setOutletId] = useState(5);
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number | string>("");
  const [specialPrice, setSpecialPrice] = useState<number | string>("");
  const [servingSize, setServingSize] = useState("");
  const [allergens, setAllergens] = useState("");
  const [calories, setCalories] = useState("");
  const [weight, setWeight] = useState("");
  const [specialLabel, setSpecialLabel] = useState("");
  const [vegNonVeg, setVegNonVeg] = useState("Veg");
  const [gst, setGst] = useState(5); // Ensure gst is a string
  const [image, setImage] = useState<File | null>(null);
  const [isEnabled, setIsEnabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!name || !description || !price || !servingSize || !allergens || !calories || !weight || !category) {
      setError("Please fill all the required fields");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    const formData = new FormData();
    formData.append("outlet_id", String(outletId));
    formData.append("menu[outlet]", String(outletId));
    formData.append("menu[category]", category);
    formData.append("menu[name]", name);
    formData.append("menu[description]", description);
    formData.append("menu[price]", String(price));
    formData.append("menu[special_price]", String(specialPrice));
    formData.append("menu[serving_size]", servingSize);
    formData.append("menu[allergens]", allergens);
    formData.append("menu[calories]", calories);
    formData.append("menu[weight]", weight);
    formData.append("menu[special_label]", specialLabel);
    formData.append("menu[veg_non_veg]", vegNonVeg);
    formData.append("menu[is_enabled]", String(isEnabled));
    formData.append("menu[tax_percentage]", gst);
    formData.append("menu[service_tax]", "1");

    if (image) {
      formData.append("menu[image]", image);
    }

    try {
      const response = await axios.post(
        "https://api-stg.tasteiq.in/api/add_menu_item_by_outlet/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer <your_token_here>`,
          },
        }
      );
      setSuccess("Item added successfully!");
    } catch (err: any) {
      setError(err.response?.data?.message || "An error occurred while adding the item");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full bg-background rounded-xl flex flex-col">
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col space-y-6 items-center px-10 py-10">
          <div className="flex justify-between items-center w-full">
            <h1 className="text-md text-start">Add item</h1>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Trash2 />
              </Button>
              <div className="flex items-center space-x-2">
                <Switch
                  id="inStock"
                  checked={isEnabled}
                  onChange={() => setIsEnabled(!isEnabled)}
                  className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-red-500"
                />
                <Label htmlFor="inStock">Instock</Label>
              </div>
            </div>
          </div>

          <CustomSelect
            options={[{ value: "5", label: "5% GST" }, { value: "2.5", label: "2.5% GST" }]}
            value={gst}  // GST value should be of type string
            onChange={(value: string) => setGst(value)}  // onChangthe gst value on change
          />

          <Button className="w-full" onClick={handleSubmit} disabled={loading}>
            {loading ? "Adding..." : "Create"}
          </Button>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-500 text-sm">{success}</p>}
        </div>
      </div>
    </div>
  );
};

export default AddItem;
