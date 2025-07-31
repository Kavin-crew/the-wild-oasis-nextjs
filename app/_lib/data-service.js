import mongoose from "mongoose";
import connectDB from "@/config/database";
import Cabin from "@/models/Cabin";
import { notFound } from "next/navigation";

///////////////////////////
//GET all cabins
///////////////////////////
export async function getCabins() {
  await connectDB();
  const cabins = await Cabin.find({}).lean();

  if (!cabins || cabins.length === 0) {
    notFound();
  }

  return cabins;
}

///////////////////////////
//GET dynamic name for metadata
///////////////////////////
export async function getCabinName(id) {
  await connectDB();

  if (!mongoose.Types.ObjectId.isValid(id)) {
    notFound();
  }

  const { name } = await Cabin.findOne({ _id: id }).lean();

  if (!name) {
    notFound();
  }

  return name;
}

///////////////////////////
//GET cabin using ID
///////////////////////////
export async function getCabin(id) {
  await connectDB();

  if (!mongoose.Types.ObjectId.isValid(id)) {
    notFound();
  }

  const cabin = await Cabin.findOne({ _id: id }).lean();

  if (!cabin) {
    notFound();
  }

  return cabin;
}
