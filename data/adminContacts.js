/**
 * Generate WhatsApp link with pre-filled message
 * @param {Object} unit - Object containing daerah and name properties
 * @returns {string|null} WhatsApp deep link or null if invalid input
 */
export const generateWhatsAppLink = (unit) => {
  try {
    // Validate input
    if (!unit || typeof unit !== 'object') {
      console.error('Invalid unit: must be an object');
      return null;
    }

    if (!unit.daerah || !unit.name) {
      console.error('Invalid unit object: daerah and name are required');
      return null;
    }

    // Mapping admin numbers by region
    const adminByDaerah = {
      Bekasi: ['6281280007220'],
      // Add other regions as needed
    };

    // Get admin number based on region
    const nomorAdminList = adminByDaerah[unit.daerah];
    const defaultAdmin = '6281280007220'; // Default admin number
    let nomorAdmin = nomorAdminList?.[0] || defaultAdmin;

    // Validate phone number
    if (!/^[0-9]{10,15}$/.test(nomorAdmin) || !nomorAdmin.startsWith('62')) {
      console.error(`Invalid phone number: ${nomorAdmin}. Using default admin number.`);
      nomorAdmin = defaultAdmin;
    }

    // Sanitize inputs
    const sanitizedDaerah = unit.daerah.toString().trim().replace(/[^\w\s-]/g, '');
    const sanitizedName = unit.name.toString().trim().replace(/[^\w\s-]/g, '');

    // Format message as a single line to match ContactPage simplicity
    const message = `Halo Admin ${sanitizedDaerah},\n\nSaya ingin menyewa unit ${sanitizedName} di ${sanitizedDaerah}.\nApakah unit tersebut masih tersedia? Terima kasih.`;

    // Log raw message for debugging
    console.log('Raw WhatsApp message:', message);

    // Encode the entire message
    const encodedMessage = encodeURIComponent(message);

    // Construct WhatsApp link using api.whatsapp.com
    const link = `https://api.whatsapp.com/send?phone=${nomorAdmin}&text=${encodedMessage}`;

    // Log the generated link for debugging
    console.log('Generated WhatsApp link:', link);

    return link;
  } catch (error) {
    console.error('Error generating WhatsApp link:', error.message);
    return null;
  }
};