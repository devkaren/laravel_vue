import { getInstance } from '@/configs/axios';

/**
 *
 * @param {TicketsInterface}tickets
 * @returns {Promise<any>}
 */

export const fetchUserTickets = async () => {
  return getInstance().get('/api/customer/v1/support/tickets')
};
