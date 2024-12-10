import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import axios from 'axios';

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState('');
  const [image, setImage] = useState<File | null>(null); // State for the image
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]); // Save the selected image
    }
  };

  const handleSubmit = async () => {
    if (!categoryName) {
      setError('Category name is required');
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    const formData = new FormData();
    formData.append('name', categoryName);

    // Append image if present
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await axios.post(
        'https://api-stg.tasteiq.in/api/add_category_in_pool/',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data', // Form data header for file upload
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM0NjkxMzQ2LCJpYXQiOjE3MzM4MjczNDYsImp0aSI6ImY1Y2IyNjY3ODIwNjQ2Njg5MWQ5ODJlOGQzYjIwYjg4IiwidXNlcl9pZCI6MSwiaWQiOjF9.FseRpAifIzFhEljp4OxaQl1qzKTrd2qK34UXot8cnrs`,
          },
        }
      );
      setSuccess('Category added successfully!');
    } catch (err: any) {
      console.error(err.response?.data);
      setError(err.response?.data?.message || 'An error occurred while adding the category');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full bg-background rounded-xl flex flex-col">
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col space-y-6 items-center px-10 py-10">
          <h1 className="text-md text-start w-full">Add Category</h1>
          <Input
            placeholder="Category Name"
            className="w-full"
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-28 border-2 border-dashed rounded-lg cursor-pointer"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm">
                  <span className="font-semibold">Upload Image</span>
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={handleImageChange} // Handle image change
              />
            </label>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
          <Button className="w-full" onClick={handleSubmit} disabled={loading}>
            {loading ? 'Creating...' : 'Create'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
