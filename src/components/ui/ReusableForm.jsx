"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const ReusableForm = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  options,
  required = false,
  icon: Icon,
  className = "",
  disabled = false,
  rows = 4,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => setShowPassword(!showPassword);

  const commonInputClass = `
    bg-transparent flex-1 outline-none text-slate-800
    placeholder-slate-400 text-sm disabled:cursor-not-allowed
    ${className}
  `;

  const renderInput = () => {
    switch (type) {
      case "select":
        return (
          <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            disabled={disabled}
            className={commonInputClass}
          >
            <option value="" className="bg-white text-slate-400">
              Select {label}
            </option>
            {options?.map((opt) => (
              <option
                key={opt?.value || opt}
                value={opt?.value || opt}
                className="bg-white text-slate-700"
              >
                {opt?.label || opt}
              </option>
            ))}
          </select>
        );

      case "date":
        return (
          <input
            id={name}
            name={name}
            type="date"
            value={value}
            onChange={onChange}
            required={required}
            disabled={disabled}
            className={`${commonInputClass} cursor-pointer`}
          />
        );

      case "password":
        return (
          <div className="flex items-center w-full">
            <input
              id={name}
              name={name}
              type={showPassword ? "text" : "password"}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              required={required}
              disabled={disabled}
              className={commonInputClass}
            />
            <button
              type="button"
              onClick={handleTogglePassword}
              className="text-slate-400 hover:text-yellow-500 transition ml-2"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
        );

      case "file":
        return (
          <div className="border border-dashed border-slate-300 rounded-xl px-4 py-3 flex flex-col sm:flex-row items-center gap-3 bg-slate-50">
            <input
              id={name}
              name={name}
              type="file"
              onChange={onChange}
              required={required}
              disabled={disabled}
              className="text-sm text-slate-600 file:mr-4 file:py-1.5 file:px-3 file:rounded-lg
              file:border-0 file:text-sm file:font-medium
              file:bg-yellow-400 file:text-black hover:file:bg-yellow-500
              cursor-pointer disabled:cursor-not-allowed"
            />
            <p className="text-[12px] text-slate-500 text-center sm:text-left">
              Upload an image (JPG / PNG supported).
            </p>
          </div>
        );

      case "textarea":
        return (
          <textarea
            id={name}
            name={name}
            rows={rows}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            disabled={disabled}
            className="w-full min-h-[120px] rounded-xl border border-slate-300
              px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400
              focus:outline-none focus:ring-1 focus:ring-yellow-400 resize-y
              disabled:cursor-not-allowed bg-white"
          />
        );

      default:
        return (
          <input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            value={type !== "file" ? value : undefined}
            onChange={onChange}
            required={required}
            disabled={disabled}
            className={commonInputClass}
          />
        );
    }
  };

  const isTextarea = type === "textarea";
  const isFile = type === "file";

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={name}
          className={
            isTextarea || isFile
              ? "text-sm font-medium mb-1 text-slate-700 flex items-center gap-2"
              : "block text-md font-medium mb-1 text-slate-700"
          }
        >
          {Icon && (isTextarea || isFile) ? (
            <>
              <Icon className="w-4 h-4 text-yellow-500" />
              <span>{label}</span>
              {required && <span className="text-red-500">*</span>}
            </>
          ) : (
            <>
              {label} {required && <span className="text-red-500">*</span>}
            </>
          )}
        </label>
      )}

      <div
        className={
          isTextarea || isFile
            ? "group"
            : `flex items-center gap-3 rounded-lg px-1 py-1
               border border-slate-300 bg-white
               focus-within:ring-1 focus-within:ring-yellow-400
               transition`
        }
      >
        {Icon && !isTextarea && !isFile && (
          <div className="bg-slate-50 p-2 rounded">
            <Icon className="w-4 h-4 text-slate-500 group-focus-within:text-yellow-500" />
          </div>
        )}

        {renderInput()}
      </div>
    </div>
  );
};

export default ReusableForm;
